import angular from 'angular';
import 'angular-bootstrap';
import 'angular-cookies';
import 'angular-resource';
import 'angular-sanitize';
import 'angular-socket-io';
import 'angular-ui-router';

module.exports = angular
  .module('pixelnukeApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'btford.socket-io',
    'ui.router',
    'ui.bootstrap',
    require('./content/account/account.routing'),
    require('./content/admin/admin.routing'),
    require('./content/main/main.routing'),
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
