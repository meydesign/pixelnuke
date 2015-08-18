import config from 'config';
import express from 'express';
import mongoose from 'mongoose';
import winston from 'winston';

// Connect to database
mongoose.connect(config.mongo.uri, config.mongo.options);
mongoose.connection.on('error', (err) => {
  winston.log('error', 'MongoDB connection error: ' + err);
  process.exit(-1);
});

// Populate DB with sample data
if (config.seedDB) {
  require('./core/seed');
}

// Setup server
const app = express();
const server = require('http').createServer(app);
const socketio = require('socket.io')(server, {
  serveClient: true,
  path: '/socket.io-client',
});
require('./core/socketio')(socketio);
require('./core/express')(app);
require('./server.routes')(app);

// Start server
server.listen(config.port, config.ip, () => {
  if (process.send) {
    process.send('online');
  } else {
    winston.log('info', 'Express server listening on %d, in %s mode', config.port, app.get('env'));
  }
});

// Expose app
exports = module.exports = app;
