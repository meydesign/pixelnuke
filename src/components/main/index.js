require('angular');
require('angular-ui-router');
require('angular-socket-io');

require('../auth');

angular
  .module('pn.main', [
    'ui.router',
    'btford.socket-io',
    'pn.auth',
  ])
  .config(require('./main.routing'))
  .controller('MainController', require('./main.controller'));
