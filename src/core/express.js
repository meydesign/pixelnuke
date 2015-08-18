import express from 'express';
import favicon from 'serve-favicon';
import morgan from 'morgan';
import compression from 'compression';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import cookieParser from 'cookie-parser';
import errorHandler from 'errorhandler';
import path from 'path';
import config from 'config';
import passport from 'passport';

module.exports = (app) => {
  const env = app.get('env');

  app.use(compression());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(methodOverride());

  app.use(cookieParser());

  app.use(passport.initialize());

  app.set('views', config.root + '/server/views');
  app.set('view engine', 'jade');

  app.use(express.static(path.join(__dirname, '/public')));
  app.set('appPath', path.join(__dirname, '/public'));

  app.use(favicon(path.join(__dirname, '/public/favicon.ico')));

  app.use(morgan('dev'));

  if (env !== 'production') {
    app.use(errorHandler());
  }
};
