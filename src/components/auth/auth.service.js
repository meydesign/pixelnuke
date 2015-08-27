export default ($http, $location, $q, $rootScope, $cookieStore, User) => {
  let currentUser = {};

  if ($cookieStore.get('token')) {
    currentUser = User.get();
  }

  function logout() {
    $cookieStore.remove('token');
    currentUser = {};
  }

  function login(user, callback) {
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
        logout();

        $cookieStore.remove('token');
        currentUser = {};

        deferred.reject(err);

        return cb(err);
      });

    return deferred.promise;
  }

  function createUser(user, callback) {
    const cb = callback || angular.noop;

    return User.save(user,
      (data) => {
        $cookieStore.put('token', data.token);
        currentUser = User.get();
        return cb(user);
      },

      (err) => {
        logout();
        return cb(err);
      }
    ).$promise;
  }

  function changePassword(oldPassword, newPassword, callback) {
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
  }

  function getCurrentUser() {
    return currentUser;
  }

  function isLoggedIn() {
    return currentUser.hasOwnProperty('role');
  }

  function isLoggedInAsync(cb) {
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
  }

  function isAdmin() {
    return currentUser.role === 'admin';
  }

  function getToken() {
    return $cookieStore.get('token');
  }

  const factoryAuth = {
    login: login,

    logout: logout,

    createUser: createUser,

    changePassword: changePassword,

    getCurrentUser: getCurrentUser,

    isLoggedIn: isLoggedIn,

    isLoggedInAsync: isLoggedInAsync,

    isAdmin: isAdmin,

    getToken: getToken,
  };

  return factoryAuth;
};
