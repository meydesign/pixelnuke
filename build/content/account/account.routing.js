import angular from 'angular';
import 'angular-ui-router';

function accountRouting($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('account', {
      resolve: {
        loadAccountCtrl: ($q, $ocLazyLoad) => {
          return $q((resolve) => {
            require.ensure([], () => {
              const module = require('./account');

              $ocLazyLoad.load({ name: 'account' });

              resolve(module.controller);
            });
          });
        },
      },
    })
    .state('account.login', {
      url: '/login',
      template: require('./login/login.jade'),
      controller: 'LoginCtrl',
    })
    .state('account.settings', {
      url: '/settings',
      template: require('./settings/settings.jade'),
      controller: 'SettingsCtrl',
      authenticate: true,
    })
    .state('account.signup', {
      url: '/signup',
      template: require('./signup/signup.jade'),
      controller: 'SignupCtrl',
    });
}

export default angular.module('account.routing', []).config(accountRouting);
