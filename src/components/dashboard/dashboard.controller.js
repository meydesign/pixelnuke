export default ($location, $scope, Auth, $stateParams) => {
  $scope.$parent.ch = $stateParams.contentHeader;
};
