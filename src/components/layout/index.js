import angular from 'angular';
import '../auth';

angular
  .module('pn.layout', [
    'pn.auth',
  ])
  .config(require('./layout.routing'))
  .config(require('../login/login.routing'))
  .config(require('../dashboard/dashboard.routing'))
  .controller('LayoutController', require('./layout.controller'));
