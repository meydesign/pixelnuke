require('angular');
require('angular-ui-router');
require('../auth');

export default angular
  .module('pn.settings', [
    'ui.router',
    'pn.auth',
  ])
  .config(require('./settings.routing'))
  .controller('SettingsCtrl', require('./settings.controller'));
