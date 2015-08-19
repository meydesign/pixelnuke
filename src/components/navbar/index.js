require('angular');
require('../auth');

angular
  .module('pn.navbar', [
    'pn.auth',
  ])
  .controller('NavbarCtrl', require('./navbar.controller'));
