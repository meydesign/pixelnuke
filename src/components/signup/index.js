require('angular');
require('angular-ui-router');
require('../auth');

export default angular
  .module('pn.signup', [
    'ui.router',
    'pn.auth',
  ])
  .config(require('./signup.routing'))
  .controller('SignupCtrl', require('./signup.controller'));
