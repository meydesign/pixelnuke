export default ($stateProvider) => {
  $stateProvider
    .state('admin', {
      url: '/admin',
      template: require('jade!./admin.jade'),
      controller: 'AdminCtrl',
    });
};
