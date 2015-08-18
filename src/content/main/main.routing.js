import angular from 'angular';
import 'angular-ui-router';

function mainRouting($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('main', {
      url: '/',
      template: require('./main.jade'),
      controller: 'MainCtrl',
      resolve: {
        loadMainCtrl: ($q, $ocLazyLoad) => {
          return $q((resolve) => {
            require.ensure([], () => {
              const module = require('./main');

              $ocLazyLoad.load({ name: 'main' });

              resolve(module.controller);
            });
          });
        },
      },
    });
}

export default angular.module('main.routing', []).config(mainRouting);
