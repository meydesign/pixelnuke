import express from 'express';
import morgan from 'morgan';
import compression from 'compression';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import cookieParser from 'cookie-parser';
import errorHandler from 'errorhandler';
import config from 'config';
import passport from 'passport';
import mongoose from 'mongoose';
import winston from 'winston';
import path from 'path';

// Connect to database
mongoose.connect(config.mongo.uri, config.mongo.options);
mongoose.connection.on('error', (err) => {
  winston.log('error', 'MongoDB connection error: ' + err);
  process.exit(-1);
});

// Populate DB with sample data
if (config.seedDB) {
  require('./api/thing/thing.seed');
  require('./api/user/user.seed');
}

// Setup server
const app = express();

app.set('env', process.env.NODE_ENV || 'development');

app.set('views', path.join(__dirname, '/templates'));
app.set('view engine', 'jade');

app.use(compression());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

app.use(cookieParser());

app.use(passport.initialize());

app.use(express.static(path.join(__dirname, '/public')));

app.use(morgan('dev'));

if (app.get('env') !== 'production') {
  app.use(errorHandler());
}

app.use('/api/things', require('./api/thing'));
app.use('/api/users', require('./api/user'));

app.use('/auth', require('./api/auth'));

// All undefined asset or api routes should return a 404
app.route('/:url(api|auth|components|app|bower_components|assets)/*')
  .get((req, res) => {
    res
      .status(404)
      .sendFile(path.join(__dirname, '/templates/error404.html'));
  });

// Start server
const server = app.listen(config.port, config.ip, () => {
  const io = require('socket.io')(server, {
    serveClient: true,
    path: '/socket.io-client',
  });

  io.on('connection', (socket) => {
    socket.address = socket.handshake.address !== null
      ? socket.handshake.address
      : process.env.DOMAIN;

    socket.connectedAt = new Date();

    socket.on('disconnect', () => {
      winston.log('info', '[%s] DISCONNECTED', socket.handshake.address);
    });

    socket.on('info', (data) => {
      winston.log('info', '[%s] %s', socket.address, JSON.stringify(data, null, 2));
    });

    winston.log('info', '[%s] CONNECTED', socket.address);

    require('./api/thing/thing.socket').register(socket);
  });

  if (process.send) {
    process.send('online');
  } else {
    winston.log('info', 'Express server listening on %d, in %s mode', config.port, app.get('env'));
  }
});

// Expose app
exports = module.exports = app;
