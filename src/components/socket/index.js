require('angular');
require('angular-socket-io');

angular
  .module('pn.socket', [
    'btford.socket-io',
  ])
  .factory('socket', require('./socket.service'));
