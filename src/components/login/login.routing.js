export default ($stateProvider) => {
  $stateProvider
    .state('login', {
      url: '/login',
      template: require('jade!./login.jade'),
      controller: 'LoginController',
    });
};
