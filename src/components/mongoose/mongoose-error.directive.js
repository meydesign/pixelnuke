export default () => {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: (scope, element, attrs, ngModel) => {
      element.on('keydown', () => {
        return ngModel.$setValidity('mongoose', true);
      });
    },
  };
};
