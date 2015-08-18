import angular from 'angular';

import '../../../components/auth/auth.service';

angular
  .module('pixelnukeApp')
  .controller('LoginCtrl', ($location, $scope, Auth) => {
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
            $location.path('/');
          })

          .catch((err) => {
            $scope.errors.other = err.message;
          });
      }
    };
  });
