import angular from 'angular';
import 'angular-ui-router';

function adminRouting($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('admin', {
      url: '/',
      template: require('./admin.jade'),
      controller: 'AdminCtrl',
      resolve: {
        loadMainCtrl: ($q, $ocLazyLoad) => {
          return $q((resolve) => {
            require.ensure([], () => {
              const module = require('./admin');

              $ocLazyLoad.load({ name: 'admin' });

              resolve(module.controller);
            });
          });
        },
      },
    });
}

export default angular.module('admin.routing', []).config(adminRouting);
