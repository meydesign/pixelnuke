require('angular');
require('angular-cookies');
require('angular-resource');

angular
  .module('pn.auth', [
    'ngCookies',
    'ngResource',
  ])
  .factory('Auth', require('./auth.service'))
  .factory('User', require('./user.service'));
