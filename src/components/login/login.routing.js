export default ($stateProvider) => {
  $stateProvider
    .state('layout.login', {
      parent: 'layout',
      url: '/login',
      views: {
        'content@layout': {
          template: require('./login.jade'),
          controller: require('./login.controller'),
        },
      },
      params: {
        contentHeader: {
          title: 'Dashboard',
          breadcrumbs: [
            {
              icon: 'fa-home',
              text: '',
              state: 'main',
            },
          ],
        },
      },
    });
};
