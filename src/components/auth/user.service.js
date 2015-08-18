import angular from 'angular';
import 'angular-resource';

angular
  .module('pixelnukeApp')
  .factory('User', ($resource) => {
    return $resource('/api/users/:id/:controller',
      {
        id: '@_id',
      },
      {
        changePassword: {
          method: 'PUT',
          params: {
            controller: 'password',
          },
        },
        get: {
          method: 'GET',
          params: {
            id: 'me',
          },
        },
      }
    );
  });
