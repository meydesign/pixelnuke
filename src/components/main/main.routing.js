export default ($stateProvider) => {
  $stateProvider
    .state('main', {
      // url: '',
      views: {
        '@': {
          template: require('../layout/layout.jade'),
          controller: require('../layout/layout.controller.js'),
        },
        'topNav@main': {
          template: require('../navbar/navbar.jade'),
          controller: require('../navbar/navbar.controller.js'),
        },
        'contentHeader@main': {
          template: require('../content-header/header.jade'),
          controller: require('../content-header/header.controller.js'),
        },
        'content@main': {
          template: require('./main.jade'),
          controller: require('./main.controller.js'),
        },
        'sideBarLeft@main': {
          template: require('../sidebar-left/sidebar.jade'),
          controller: require('../sidebar-left/sidebar.controller.js'),
        },
        'sideBarRight@main': {
          template: require('../sidebar-right/sidebar.jade'),
          controller: require('../sidebar-right/sidebar.controller.js'),
        },
        'footer@main': {
          template: require('../footer/footer.jade'),
          controller: require('../footer/footer.controller.js'),
        },
      },
      abstract: true,
    });
};
