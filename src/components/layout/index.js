require('angular');
require('../auth');

angular
  .module('pn.layout', [
    'pn.auth',
  ])
  .config(require('./layout.routing'))
  .controller('LayoutController', require('./layout.controller'));
