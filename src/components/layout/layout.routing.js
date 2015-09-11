export default ($stateProvider) => {
  $stateProvider
    .state('layout', {
      url: '',
      views: {
        layout: {
          template: require('./layout.jade'),
          controller: require('./layout.controller.js'),
        },
        'navbar@layout': {
          template: require('./partials/navbar/navbar.jade'),
          controller: require('./partials/navbar/navbar.controller.js'),
        },
        'header@layout': {
          template: require('./partials/header/header.jade'),
          controller: require('./partials/header/header.controller.js'),
        },
        'sidebarLeft@layout': {
          template: require('./partials/sidebar-left/sidebar.jade'),
          controller: require('./partials/sidebar-left/sidebar.controller.js'),
        },
        'sidebarRight@layout': {
          template: require('./partials/sidebar-right/sidebar.jade'),
          controller: require('./partials/sidebar-right/sidebar.controller.js'),
        },
        'footer@layout': {
          template: require('./partials/footer/footer.jade'),
          controller: require('./partials/footer/footer.controller.js'),
        },
      },
    });
};
