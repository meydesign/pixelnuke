import angular from 'angular';

import '../../../components/auth/auth.service';

angular.module('pixelnukeApp')
  .controller('SignupCtrl', ($location, $scope, Auth) => {
    $scope.user = {};
    $scope.errors = {};

    $scope.register = (form) => {
      $scope.submitted = true;

      if (form.$valid) {
        Auth
          .createUser({
            name: $scope.user.name,
            email: $scope.user.email,
            password: $scope.user.password,
          })

          .then(() => {
            $location.path('/');
          })

          .catch((err) => {
            localError = err.data;

            $scope.errors = {};

            angular.forEach(localError.errors, (error, field) => {
              form[field].$setValidity('mongoose', false);
              $scope.errors[field] = error.message;
            });
          });
      }
    };
  });
