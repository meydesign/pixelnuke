require('angular');
require('../auth');

angular
  .module('pn.footer', [
    'pn.auth',
  ])
  .controller('FooterCtrl', require('./footer.controller'));
