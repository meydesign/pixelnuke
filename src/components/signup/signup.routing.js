export default ($stateProvider) => {
  $stateProvider
    .state('signup', {
      url: '/signup',
      template: require('./signup.jade'),
      controller: 'SignupCtrl',
    });
};
