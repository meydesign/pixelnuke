export default ($stateProvider) => {
  $stateProvider
    .state('layout', {
      url: '/',
      views: {
        '@': {
          template: require('./layout.jade'),
          controller: require('./layout.controller.js'),
        },
        'topNav@layout': {
          template: require('../navbar/navbar.jade'),
          controller: require('../navbar/navbar.controller.js'),
        },
        'contentHeader@layout': {
          template: require('../content-header/header.jade'),
          controller: require('../content-header/header.controller.js'),
        },
        // 'content@main': {
        //   template: require('./main.jade'),
        //   controller: require('./main.controller.js'),
        // },
        'sideBarLeft@layout': {
          template: require('../sidebar-left/sidebar.jade'),
          controller: require('../sidebar-left/sidebar.controller.js'),
        },
        'sideBarRight@layout': {
          template: require('../sidebar-right/sidebar.jade'),
          controller: require('../sidebar-right/sidebar.controller.js'),
        },
        'footer@layout': {
          template: require('../footer/footer.jade'),
          controller: require('../footer/footer.controller.js'),
        },
      },
      abstract: true,
    });
};
