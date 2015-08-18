import angular from 'angular';

angular
  .module('pixelnukeApp')
  .directive('mongooseError', () => {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: (scope, element, attrs, ngModel) => {
        element.on('keydown', () => {
          return ngModel.$setValidity('mongoose', true);
        });
      },
    };
  });
