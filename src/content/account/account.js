import angular from 'angular';

export default angular
  .module('account', [
    require('./login/login.controller').name,
    require('./settings/settings.controller').name,
    require('./signup/signup.controller').name,
  ]);
