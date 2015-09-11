export default ($location, $scope, Auth, $stateParams) => {
  console.log('dashboard');
  console.log($scope);
  $scope.$parent.$parent.ch = $stateParams.contentHeader;
};
