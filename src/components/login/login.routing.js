export default ($stateProvider) => {
  $stateProvider
    .state('login', {
      url: '/login',
      template: require('./login.jade'),
      controller: 'LoginController',
    });
};
