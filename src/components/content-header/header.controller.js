import _ from 'lodash';

export default ($location, $scope, Auth, $rootScope, $stateParams) => {
  $scope.isLoggedIn = Auth.isLoggedIn;
  $scope.isAdmin = Auth.isAdmin;
  $scope.getCurrentUser = Auth.getCurrentUser;

  $scope.isActive = (route) => {
    return route === $location.path();
  };

  $scope.rightSidebarOpen = true;

  $scope.toggleRightSideBar = () => {
    if ($scope.rightSidebarOpen) {
      $scope.rightSidebarOpen = false;
      $rootScope.rootClasses.push('sidebar-right-opened');
      return;
    }

    $scope.rightSidebarOpen = true;
    _.pull($rootScope.rootClasses, 'sidebar-right-opened');
    return;
  };
};
