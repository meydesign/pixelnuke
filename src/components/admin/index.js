require('angular');
require('angular-ui-router');
require('../auth');

export default angular
  .module('pn.admin', [
    'ui.router',
    'pn.auth',
  ])
  .config(require('./admin.routing'))
  .controller('AdminCtrl', require('./admin.controller'));
