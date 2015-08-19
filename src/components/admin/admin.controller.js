export default ($http, $scope, User) => {
  $scope.users = User.query();

  $scope.delete = (user) => {
    User.remove({ id: user._id });

    angular.forEach($scope.users, (u, i) => {
      if (u === user) {
        $scope.users.splice(i, 1);
      }
    });
  };
};
