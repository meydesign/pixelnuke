export default ($stateProvider) => {
  $stateProvider
    .state('main', {
      url: '/',
      template: require('jade!./main.jade'),
      controller: 'MainController',
    });
};
