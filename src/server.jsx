import 'babel/polyfill';
import _ from 'lodash';
import express from 'express';
import fs from 'fs';
import path from 'path';
import ReactDOMServer from 'react-dom/server';
import router from './router';
import winston from 'winston';

// Express Settings
const server = global.server = express();

server.set('port', process.env.PORT || 4080);
server.set('etag', false);
server.use(express.static(path.join(__dirname, 'public')));

// API
server.use('/api/content', require('./api/content'));

// Routes
const templateFile = path.join(__dirname, 'templates/index.html');
const template = _.template(fs.readFileSync(templateFile, 'utf8'));

server.get('*', async (req, res, next) => {
  try {
    let statusCode = 200;
    const data = { title: '', description: '', css: '', body: '' };
    const css = [];
    const context = {
      onInsertCss: value => css.push(value),
      onSetTitle: value => data.title = value,
      onSetMeta: (key, value) => data[key] = value,
      onPageNotFound: () => statusCode = 404,
    };

    await router.dispatch({path: req.path, context}, (state, component) => {
      data.body = ReactDOMServer.renderToString(component);
      data.css = css.join('');
    });

    const html = template(data);
    res.status(statusCode).send(html);
  } catch (e) {
    next(e);
  }
});

// Create Server
server.listen(server.get('port'), () => {
  if (process.send) {
    process.send('online');
  } else {
    winston.log('info', 'Transfer listening on port ' + server.get('port'));
  }
});
