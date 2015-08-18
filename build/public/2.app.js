webpackJsonp([2],{

/***/ 9:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	__webpack_require__(15);
	
	__webpack_require__(10);
	
	_angular2['default'].module('pixelnukeApp').factory('Auth', function Auth($http, $location, $q, $rootScope, $cookieStore, User) {
	  var _this = this;
	
	  var currentUser = {};
	
	  if ($cookieStore.get('token')) {
	    currentUser = User.get();
	  }
	
	  return {
	    login: function login(user, callback) {
	      var cb = callback || _angular2['default'].noop;
	      var deferred = $q.defer();
	
	      $http.post('/auth/local', {
	        email: user.email,
	        password: user.password
	      }).success(function (data) {
	        $cookieStore.put('token', data.token);
	        currentUser = User.get();
	        deferred.resolve(data);
	
	        return cb();
	      }).error((function (err) {
	        _this.logout();
	        deferred.reject(err);
	
	        return cb(err);
	      }).bind(_this));
	
	      return deferred.promise;
	    },
	
	    logout: function logout() {
	      $cookieStore.remove('token');
	      currentUser = {};
	    },
	
	    createUser: function createUser(user, callback) {
	      var cb = callback || _angular2['default'].noop;
	
	      return User.save(user, function (data) {
	        $cookieStore.put('token', data.token);
	        currentUser = User.get();
	        return cb(user);
	      }, (function (err) {
	        _this.logout();
	        return cb(err);
	      }).bind(_this)).$promise;
	    },
	
	    changePassword: function changePassword(oldPassword, newPassword, callback) {
	      var cb = callback || _angular2['default'].noop;
	
	      return User.changePassword({ id: currentUser._id }, { oldPassword: oldPassword, newPassword: newPassword }, function (user) {
	        return cb(user);
	      }, function (err) {
	        return cb(err);
	      }).$promise;
	    },
	
	    getCurrentUser: function getCurrentUser() {
	      return currentUser;
	    },
	
	    isLoggedIn: function isLoggedIn() {
	      return currentUser.hasOwnProperty('role');
	    },
	
	    isLoggedInAsync: function isLoggedInAsync(cb) {
	      if (currentUser.hasOwnProperty('$promise')) {
	        currentUser.$promise.then(function () {
	          cb(true);
	        })['catch'](function () {
	          cb(false);
	        });
	      } else if (currentUser.hasOwnProperty('role')) {
	        cb(true);
	      } else {
	        cb(false);
	      }
	    },
	
	    isAdmin: function isAdmin() {
	      return currentUser.role === 'admin';
	    },
	
	    getToken: function getToken() {
	      return $cookieStore.get('token');
	    }
	  };
	});

/***/ },

/***/ 10:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	__webpack_require__(8);
	
	_angular2['default'].module('pixelnukeApp').factory('User', function ($resource) {
	  return $resource('/api/users/:id/:controller', {
	    id: '@_id'
	  }, {
	    changePassword: {
	      method: 'PUT',
	      params: {
	        controller: 'password'
	      }
	    },
	    get: {
	      method: 'GET',
	      params: {
	        id: 'me'
	      }
	    }
	  });
	});

/***/ },

/***/ 36:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	exports['default'] = _angular2['default'].module('account', [__webpack_require__(38).name, __webpack_require__(39).name, __webpack_require__(40).name]);
	module.exports = exports['default'];

/***/ },

/***/ 38:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	__webpack_require__(9);
	
	_angular2['default'].module('pixelnukeApp').controller('LoginCtrl', function ($location, $scope, Auth) {
	  $scope.user = {};
	  $scope.errors = {};
	
	  $scope.login = function (form) {
	    $scope.submitted = true;
	
	    if (form.$valid) {
	      Auth.login({
	        email: $scope.user.email,
	        password: $scope.user.password
	      }).then(function () {
	        $location.path('/');
	      })['catch'](function (err) {
	        $scope.errors.other = err.message;
	      });
	    }
	  };
	});

/***/ },

/***/ 39:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	__webpack_require__(9);
	
	_angular2['default'].module('pixelnukeApp').controller('SettingsCtrl', function ($scope, Auth) {
	  $scope.errors = {};
	
	  $scope.changePassword = function (form) {
	    $scope.submitted = true;
	
	    if (form.$valid) {
	      Auth.changePassword($scope.user.oldPassword, $scope.user.newPassword).then(function () {
	        $scope.message = 'Password successfully changed.';
	      })['catch'](function () {
	        form.password.$setValidity('mongoose', false);
	        $scope.errors.other = 'Incorrect password';
	        $scope.message = '';
	      });
	    }
	  };
	});

/***/ },

/***/ 40:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	__webpack_require__(9);
	
	_angular2['default'].module('pixelnukeApp').controller('SignupCtrl', function ($location, $scope, Auth) {
	  $scope.user = {};
	  $scope.errors = {};
	
	  $scope.register = function (form) {
	    $scope.submitted = true;
	
	    if (form.$valid) {
	      Auth.createUser({
	        name: $scope.user.name,
	        email: $scope.user.email,
	        password: $scope.user.password
	      }).then(function () {
	        $location.path('/');
	      })['catch'](function (err) {
	        localError = err.data;
	
	        $scope.errors = {};
	
	        _angular2['default'].forEach(localError.errors, function (error, field) {
	          form[field].$setValidity('mongoose', false);
	          $scope.errors[field] = error.message;
	        });
	      });
	    }
	  };
	});

/***/ }

});
//# sourceMappingURL=2.app.js.map