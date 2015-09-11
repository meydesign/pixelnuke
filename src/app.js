import 'angular';
import 'angular-cookies';
import 'angular-resource';
import 'angular-sanitize';
import 'angular-socket-io';
import 'angular-bootstrap';
import 'angular-ui-router';
// import './components/admin';
import './components/auth';
import './components/layout';
import './components/modal';
import './components/mongoose';
// import './components/settings';
// import './components/signup';
import './components/socket';
import './components/rootClasses';

export default angular
  .module('pixelnukeApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'btford.socket-io',
    'ui.bootstrap',
    'ui.router',
    // 'pn.admin',
    'pn.auth',
    'pn.layout',
    'pn.modal',
    'pn.mongoose',
    'pn.socket',
    // 'pn.settings',
    // 'pn.signup',
    'pn.rootClasses',
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
    $rootScope.rootClasses = ['ng-scope'];

    $rootScope.$on('$stateChangeStart', (event, next) => {
      Auth.isLoggedInAsync((loggedIn) => {
        if (next.authenticate && !loggedIn) {
          $location.path('/login');
        }
      });
    });
  });
