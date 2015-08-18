import angular from 'angular';

import '../auth/auth.service';

angular
  .module('pixelnukeApp')
  .controller('NavbarCtrl', ($location, $scope, Auth) => {
    $scope.menu = [
      {
        title: 'Home',
        link: '/',
      },
    ];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = () => {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = (route) => {
      return route === $location.path();
    };
  });
