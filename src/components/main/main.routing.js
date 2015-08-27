export default ($stateProvider) => {
  $stateProvider
    .state('main', {
      url: '/',
      template: require('./main.jade'),
      controller: 'MainController',
    });
};
