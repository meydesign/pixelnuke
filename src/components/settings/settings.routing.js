export default ($stateProvider) => {
  $stateProvider
    .state('settings', {
      url: '/settings',
      template: require('jade!./settings.jade'),
      controller: 'SettingsCtrl',
      authenticate: true,
    });
};
