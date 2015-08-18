webpackJsonp([3],{

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

/***/ 41:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	__webpack_require__(10);
	
	_angular2['default'].module('pixelnukeApp').controller('AdminCtrl', function ($http, $scope, User) {
	  $scope.users = User.query();
	
	  $scope['delete'] = function (user) {
	    User.remove({ id: user._id });
	
	    _angular2['default'].forEach($scope.users, function (u, i) {
	      if (u === user) {
	        $scope.users.splice(i, 1);
	      }
	    });
	  };
	});

/***/ },

/***/ 42:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	exports['default'] = _angular2['default'].module('admin', [__webpack_require__(41).name]);
	module.exports = exports['default'];

/***/ }

});
//# sourceMappingURL=3.app.js.map