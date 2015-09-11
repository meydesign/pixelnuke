require('angular');
require('angular-ui-router');
require('../auth');

angular
  .module('pn.dashboard', [
    'ui.router',
    'pn.auth',
  ])
  .config(require('./dashboard.routing'))
  .controller('DashboardController', require('./dashboard.controller'));
