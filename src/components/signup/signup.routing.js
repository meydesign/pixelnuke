export default ($stateProvider) => {
  $stateProvider
    .state('signup', {
      url: '/signup',
      template: require('jade!./signup.jade'),
      controller: 'SignupCtrl',
    });
};
