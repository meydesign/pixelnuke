require('angular');
require('../auth');

angular
  .module('pn.sidebarRight', [
    'pn.auth',
  ])
  .controller('SidebarRightCtrl', require('./sidebar.controller'));
