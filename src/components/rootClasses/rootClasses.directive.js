import _ from 'lodash';

export default ($location, Auth, $rootScope) => {
  return {
    restrict: 'A',
    link: (scope, elem) => {
      scope.$watchCollection('rootClasses', (newValue) => {
        const classes    = elem[0].classList;
        const newClasses = _.difference(newValue, classes);
        const oldClasses = _.difference(classes, newValue);

        elem.removeClass(oldClasses.join());
        elem.addClass(newClasses.join());
        return;
      });
    },
  };
};
