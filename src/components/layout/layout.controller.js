export default ($location, $scope, Auth) => {
  $scope.ch = {};
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
};
