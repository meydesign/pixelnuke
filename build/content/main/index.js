require('angular');
require('angular-ui-router');
require('angular-socket-io');

require('../../components/auth');

angular
  .module('pn.main', [
    'ui.router',
    'pn.auth',
  ])
  .config(require('./main.routing'))
  .controller('MainController', require('./main.controller'));
