export default ($stateProvider) => {
  $stateProvider
    .state('layout.dashboard', {
      url: '/',
      authenticate: true,
      views: {
        'content@layout': {
          template: require('./dashboard.jade'),
          controller: require('./dashboard.controller'),
        },
      },
      params: {
        contentHeader: {
          title: 'Dashboard',
          breadcrumbs: [
            {
              icon: 'fa-home',
              text: '',
              state: 'dashboard',
            },
          ],
        },
      },
    });
};
