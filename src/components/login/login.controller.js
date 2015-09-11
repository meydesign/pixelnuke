export default ($location, $scope, Auth, $stateParams) => {
  $scope.$parent.ch = $stateParams.contentHeader;

  $scope.user = {};
  $scope.errors = {};

  $scope.login = (form) => {
    $scope.submitted = true;

    if (form.$valid) {
      Auth
        .login({
          email: $scope.user.email,
          password: $scope.user.password,
        })

        .then(() => {
          $location.path('/dashboard');
        })

        .catch((err) => {
          $scope.errors.other = err.message;
        });
    }
  };
};
