export default ($stateProvider) => {
  $stateProvider
    .state('sourceCopy.login', {
      url: '',
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
