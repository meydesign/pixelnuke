require('angular');
require('angular-bootstrap');

angular
  .module('pn.modal', [
    'ui.bootstrap',
  ])
  .factory('Modal', require('./modal.service'));
