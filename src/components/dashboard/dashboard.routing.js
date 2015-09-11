export default ($stateProvider) => {
  $stateProvider
    .state('sourceCopy', {
      parent: 'layout',
      abstract: true,
      url: '',
    })
    .state('sourceCopy.dashboard', {
      url: 'dashboard',
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
