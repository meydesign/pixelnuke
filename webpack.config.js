module.exports = [
  require('./webpack.client')({ build: false }),
  require('./webpack.server')({ build: false }),
];
