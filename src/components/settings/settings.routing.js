export default ($stateProvider) => {
  $stateProvider
    .state('settings', {
      url: '/settings',
      template: require('./settings.jade'),
      controller: 'SettingsCtrl',
      authenticate: true,
    });
};
