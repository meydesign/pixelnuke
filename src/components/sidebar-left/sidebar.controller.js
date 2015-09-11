import _ from 'lodash';

export default ($location, $scope, Auth, $rootScope) => {
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

  $scope.open = true;

  $scope.toggle = () => {
    if ($scope.open) {
      $scope.open = false;
      $rootScope.rootClasses.push('sidebar-left-collapsed');
      return;
    }

    $scope.open = true;
    _.pull($rootScope.rootClasses, 'sidebar-left-collapsed');
    return;
  };
};
