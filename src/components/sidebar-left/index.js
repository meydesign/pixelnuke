require('angular');
require('../auth');

angular
  .module('pn.sidebarLeft', [
    'pn.auth',
  ])
  .controller('SidebarLeftCtrl', require('./sidebar.controller'));
