require('angular');
require('angular-cookies');
require('angular-resource');
require('angular-sanitize');
require('angular-socket-io');
require('angular-bootstrap');
require('angular-ui-router');
require('./components/admin');
require('./components/auth');
require('./components/login');
require('./components/main');
require('./components/modal');
require('./components/mongoose');
require('./components/navbar');
require('./components/settings');
require('./components/signup');
require('./components/socket');

export default angular
  .module('pixelnukeApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'btford.socket-io',
    'ui.bootstrap',
    'ui.router',
    'pn.admin',
    'pn.auth',
    'pn.login',
    'pn.main',
    'pn.modal',
    'pn.mongoose',
    'pn.navbar',
    'pn.socket',
    'pn.settings',
    'pn.signup',
  ])

  .config(($httpProvider, $locationProvider, $stateProvider, $urlRouterProvider) => {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
    $httpProvider.interceptors.push('authInterceptor');
  })

  .factory('authInterceptor', ($location, $q, $rootScope, $cookieStore) => {
    return {
      request: (config) => {
        config.headers = config.headers || {};

        if ($cookieStore.get('token')) {
          config.headers.Authorization = 'Bearer ' + $cookieStore.get('token');
        }

        return config;
      },

      responseError: (response) => {
        if (response.status === 401) {
          $location.path('/login');

          $cookieStore.remove('token');

          return $q.reject(response);
        }

        return $q.reject(response);
      },
    };
  })

  .run(($location, $rootScope, Auth) => {
    $rootScope.$on('$stateChangeStart', (event, next) => {
      Auth.isLoggedInAsync((loggedIn) => {
        if (next.authenticate && !loggedIn) {
          event.preventDefault();
          $location.path('/login');
        }
      });
    });
  });
