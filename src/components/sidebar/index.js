require('angular');
require('../auth');

angular
  .module('pn.sidebar', [
    'pn.auth',
  ])
  .controller('SidebarCtrl', require('./sidebar.controller'));
