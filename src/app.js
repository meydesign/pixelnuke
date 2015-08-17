import angular from 'angular';
import 'angular-cookies';
import 'angular-resource';
import 'angular-sanitize';
import 'angular-socket-io';
import 'angular-ui-router';
import 'angular-bootstrap';

angular
  .module('pixelnukeApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'btford.socket-io',
    'ui.router',
    'ui.bootstrap',
  ])

  .config(($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) => {
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
    $httpProvider.interceptors.push('authInterceptor');
  })

  .factory('authInterceptor', ($rootScope, $q, $cookieStore, $location) => {
    return {
      // Add authorization token to headers
      request: (config) => {
        config.headers = config.headers || {};

        if ($cookieStore.get('token')) {
          config.headers.Authorization = 'Bearer ' + $cookieStore.get('token');
        }

        return config;
      },

      // Intercept 401s and redirect you to login
      responseError: (response) => {
        if (response.status === 401) {
          $location.path('/login');

          // remove any stale tokens
          $cookieStore.remove('token');

          return $q.reject(response);
        }

        return $q.reject(response);
      },
    };
  })

  .run(($rootScope, $location, Auth) => {
    // Redirect to login if route requires auth and you're not logged in
    $rootScope.$on('$stateChangeStart', (event, next) => {
      Auth.isLoggedInAsync((loggedIn) => {
        if (next.authenticate && !loggedIn) {
          event.preventDefault();
          $location.path('/login');
        }
      });
    });
  });

// Components
import './components/auth/user.service.js';
import './components/auth/auth.service.js';
import './components/modal/modal.service.js';
import './components/mongoose-error/mongoose-error.directive.js';
import './components/navbar/navbar.controller.js';
import './components/socket/socket.mock.js';
import './components/socket/socket.service.js';

// Content Pages
import './content/account/login/login.controller.js';
import './content/account/settings/settings.controller.js';
import './content/account/signup/signup.controller.js';
import './content/account/account.js';
import './content/admin/admin.controller.js';
import './content/admin/admin.js';
import './content/main/main.controller.js';
import './content/main/main.js';
