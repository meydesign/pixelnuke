import angular from 'angular';

export default angular
  .module('admin', [
    require('./admin.controller').name,
  ]);
