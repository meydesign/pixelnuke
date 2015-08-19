require('angular');
require('angular-ui-router');
require('../auth');

angular
  .module('pn.login', [
    'ui.router',
    'pn.auth',
  ])
  .config(require('./login.routing'))
  .controller('LoginController', require('./login.controller'));
