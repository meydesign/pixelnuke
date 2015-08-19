require('angular');

angular
  .module('pn.mongoose', [])
  .directive('mongooseError', require('./mongoose-error.directive'));
