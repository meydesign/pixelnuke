export default ($http, $location, $q, $rootScope, $cookieStore, User) => {
  let currentUser = {};

  if ($cookieStore.get('token')) {
    currentUser = User.get();
  }

  return {
    login: (user, callback) => {
      const cb = callback || angular.noop;
      const deferred = $q.defer();

      $http
        .post('/auth/local', {
          email: user.email,
          password: user.password,
        })

        .success((data) => {
          $cookieStore.put('token', data.token);
          currentUser = User.get();
          deferred.resolve(data);

          return cb();
        })

        .error((err) => {
          this.logout();
          deferred.reject(err);

          return cb(err);
        }.bind(this));

      return deferred.promise;
    },

    logout: () => {
      $cookieStore.remove('token');
      currentUser = {};
    },

    createUser: (user, callback) => {
      const cb = callback || angular.noop;

      return User.save(user,
        (data) => {
          $cookieStore.put('token', data.token);
          currentUser = User.get();
          return cb(user);
        },

        (err) => {
          this.logout();
          return cb(err);
        }.bind(this)

      ).$promise;
    },

    changePassword: (oldPassword, newPassword, callback) => {
      const cb = callback || angular.noop;

      return User.changePassword(
        { id: currentUser._id },
        { oldPassword: oldPassword, newPassword: newPassword },
        (user) => {
          return cb(user);
        },

        (err) => {
          return cb(err);
        }

      ).$promise;
    },

    getCurrentUser: () => {
      return currentUser;
    },

    isLoggedIn: () => {
      return currentUser.hasOwnProperty('role');
    },

    isLoggedInAsync: (cb) => {
      if (currentUser.hasOwnProperty('$promise')) {
        currentUser
          .$promise

          .then(() => {
            cb(true);
          })

          .catch(() => {
            cb(false);
          });
      } else if (currentUser.hasOwnProperty('role')) {
        cb(true);
      } else {
        cb(false);
      }
    },

    isAdmin: () => {
      return currentUser.role === 'admin';
    },

    getToken: () => {
      return $cookieStore.get('token');
    },
  };
};
