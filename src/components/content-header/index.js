require('angular');
require('../auth');

angular
  .module('pn.contentHeader', [
    'pn.auth',
  ])
  .controller('contentHeaderCtrl', require('./header.controller'));
