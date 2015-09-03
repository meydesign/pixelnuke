export default ($stateProvider) => {
  $stateProvider
    .state('main', {
      url: '/',
      views: {
        topNav: {
          template: require('../navbar/navbar.jade'),
          controller: require('../navbar/navbar.controller.js'),
        },
        content: {
          template: require('./main.jade'),
          controller: require('./main.controller.js'),
        },
        sideBar: {
          template: require('../sidebar/sidebar.jade'),
          controller: require('../sidebar/sidebar.controller.js'),
        },
      },
    });
};
