require("source-map-support").install();
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _config = __webpack_require__(1);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _express = __webpack_require__(2);
	
	var _express2 = _interopRequireDefault(_express);
	
	var _mongoose = __webpack_require__(5);
	
	var _mongoose2 = _interopRequireDefault(_mongoose);
	
	var _winston = __webpack_require__(7);
	
	var _winston2 = _interopRequireDefault(_winston);
	
	// Connect to database
	_mongoose2['default'].connect(_config2['default'].mongo.uri, _config2['default'].mongo.options);
	_mongoose2['default'].connection.on('error', function (err) {
	  _winston2['default'].log('error', 'MongoDB connection error: ' + err);
	  process.exit(-1);
	});
	
	// Populate DB with sample data
	if (_config2['default'].seedDB) {
	  __webpack_require__(20);
	}
	
	// Setup server
	var app = (0, _express2['default'])();
	var server = __webpack_require__(30).createServer(app);
	var socketio = __webpack_require__(36)(server, {
	  serveClient: true,
	  path: '/socket.io-client'
	});
	__webpack_require__(21)(socketio);
	__webpack_require__(19)(app);
	__webpack_require__(22)(app);
	
	// Start server
	server.listen(_config2['default'].port, _config2['default'].ip, function () {
	  if (process.send) {
	    process.send('online');
	  } else {
	    _winston2['default'].log('info', 'Express server listening on %d, in %s mode', _config2['default'].port, app.get('env'));
	  }
	});
	
	// Expose app
	exports = module.exports = app;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("config");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("passport");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var mongoose = __webpack_require__(5);
	var Schema = mongoose.Schema;
	var crypto = __webpack_require__(27);
	
	var UserSchema = new Schema({
	  name: String,
	  email: { type: String, lowercase: true },
	  role: {
	    type: String,
	    'default': 'user'
	  },
	  hashedPassword: String,
	  provider: String,
	  salt: String
	});
	
	/**
	 * Virtuals
	 */
	UserSchema.virtual('password').set(function (password) {
	  this._password = password;
	  this.salt = this.makeSalt();
	  this.hashedPassword = this.encryptPassword(password);
	}).get(function () {
	  return this._password;
	});
	
	// Public profile information
	UserSchema.virtual('profile').get(function () {
	  return {
	    'name': this.name,
	    'role': this.role
	  };
	});
	
	// Non-sensitive info we'll be putting in the token
	UserSchema.virtual('token').get(function () {
	  return {
	    '_id': this._id,
	    'role': this.role
	  };
	});
	
	/**
	 * Validations
	 */
	
	// Validate empty email
	UserSchema.path('email').validate(function (email) {
	  return email.length;
	}, 'Email cannot be blank');
	
	// Validate empty password
	UserSchema.path('hashedPassword').validate(function (hashedPassword) {
	  return hashedPassword.length;
	}, 'Password cannot be blank');
	
	// Validate email is not taken
	UserSchema.path('email').validate(function (value, respond) {
	  var self = this;
	  this.constructor.findOne({ email: value }, function (err, user) {
	    if (err) throw err;
	    if (user) {
	      if (self.id === user.id) return respond(true);
	      return respond(false);
	    }
	    respond(true);
	  });
	}, 'The specified email address is already in use.');
	
	var validatePresenceOf = function validatePresenceOf(value) {
	  return value && value.length;
	};
	
	/**
	 * Pre-save hook
	 */
	UserSchema.pre('save', function (next) {
	  if (!this.isNew) return next();
	
	  if (!validatePresenceOf(this.hashedPassword)) next(new Error('Invalid password'));else next();
	});
	
	/**
	 * Methods
	 */
	UserSchema.methods = {
	  /**
	   * Authenticate - check if the passwords are the same
	   *
	   * @param {String} plainText
	   * @return {Boolean}
	   * @api public
	   */
	  authenticate: function authenticate(plainText) {
	    return this.encryptPassword(plainText) === this.hashedPassword;
	  },
	
	  /**
	   * Make salt
	   *
	   * @return {String}
	   * @api public
	   */
	  makeSalt: function makeSalt() {
	    return crypto.randomBytes(16).toString('base64');
	  },
	
	  /**
	   * Encrypt password
	   *
	   * @param {String} password
	   * @return {String}
	   * @api public
	   */
	  encryptPassword: function encryptPassword(password) {
	    if (!password || !this.salt) return '';
	    var salt = new Buffer(this.salt, 'base64');
	    return crypto.pbkdf2Sync(password, salt, 10000, 64).toString('base64');
	  }
	};
	
	module.exports = mongoose.model('User', UserSchema);

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("mongoose");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var mongoose = __webpack_require__(5),
	    Schema = mongoose.Schema;
	
	var ThingSchema = new Schema({
	  name: String,
	  info: String,
	  active: Boolean
	});
	
	module.exports = mongoose.model('Thing', ThingSchema);

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("winston");

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var mongoose = __webpack_require__(5);
	var passport = __webpack_require__(3);
	var config = __webpack_require__(1);
	var jwt = __webpack_require__(9);
	var expressJwt = __webpack_require__(29);
	var compose = __webpack_require__(24);
	var User = __webpack_require__(4);
	var validateJwt = expressJwt({ secret: config.secrets.session });
	
	/**
	 * Attaches the user object to the request if authenticated
	 * Otherwise returns 403
	 */
	function isAuthenticated() {
	  return compose()
	  // Validate jwt
	  .use(function (req, res, next) {
	    // allow access_token to be passed through query parameter as well
	    if (req.query && req.query.hasOwnProperty('access_token')) {
	      req.headers.authorization = 'Bearer ' + req.query.access_token;
	    }
	    validateJwt(req, res, next);
	  })
	  // Attach user to request
	  .use(function (req, res, next) {
	    User.findById(req.user._id, function (err, user) {
	      if (err) return next(err);
	      if (!user) return res.status(401).send('Unauthorized');
	
	      req.user = user;
	      next();
	    });
	  });
	}
	
	/**
	 * Checks if the user role meets the minimum requirements of the route
	 */
	function hasRole(roleRequired) {
	  if (!roleRequired) throw new Error('Required role needs to be set');
	
	  return compose().use(isAuthenticated()).use(function meetsRequirements(req, res, next) {
	    if (config.userRoles.indexOf(req.user.role) >= config.userRoles.indexOf(roleRequired)) {
	      next();
	    } else {
	      res.status(403).send('Forbidden');
	    }
	  });
	}
	
	/**
	 * Returns a jwt token signed by the app secret
	 */
	function signToken(id) {
	  return jwt.sign({ _id: id }, config.secrets.session, { expiresInMinutes: 60 * 5 });
	}
	
	/**
	 * Set token cookie directly for oAuth strategies
	 */
	function setTokenCookie(req, res) {
	  if (!req.user) return res.status(404).json({ message: 'Something went wrong, please try again.' });
	  var token = signToken(req.user._id, req.user.role);
	  res.cookie('token', JSON.stringify(token));
	  res.redirect('/');
	}
	
	exports.isAuthenticated = isAuthenticated;
	exports.hasRole = hasRole;
	exports.signToken = signToken;
	exports.setTokenCookie = setTokenCookie;

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = require("jsonwebtoken");

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var express = __webpack_require__(2);
	var passport = __webpack_require__(3);
	var config = __webpack_require__(1);
	var User = __webpack_require__(4);
	
	// Passport Configuration
	__webpack_require__(13).setup(User, config);
	
	var router = express.Router();
	
	router.use('/local', __webpack_require__(12));
	
	module.exports = router;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var express = __webpack_require__(2);
	var passport = __webpack_require__(3);
	var auth = __webpack_require__(8);
	
	var router = express.Router();
	
	router.post('/', function (req, res, next) {
	  passport.authenticate('local', function (err, user, info) {
	    var error = err || info;
	    if (error) return res.status(401).json(error);
	    if (!user) return res.status(404).json({ message: 'Something went wrong, please try again.' });
	
	    var token = auth.signToken(user._id, user.role);
	    res.json({ token: token });
	  })(req, res, next);
	});
	
	module.exports = router;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var passport = __webpack_require__(3);
	var LocalStrategy = __webpack_require__(34).Strategy;
	
	exports.setup = function (User, config) {
	  passport.use(new LocalStrategy({
	    usernameField: 'email',
	    passwordField: 'password' // this is the virtual field on the model
	  }, function (email, password, done) {
	    User.findOne({
	      email: email.toLowerCase()
	    }, function (err, user) {
	      if (err) return done(err);
	
	      if (!user) {
	        return done(null, false, { message: 'This email is not registered.' });
	      }
	      if (!user.authenticate(password)) {
	        return done(null, false, { message: 'This password is not correct.' });
	      }
	      return done(null, user);
	    });
	  }));
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var express = __webpack_require__(2);
	var controller = __webpack_require__(15);
	
	var router = express.Router();
	
	router.get('/', controller.index);
	router.get('/:id', controller.show);
	router.post('/', controller.create);
	router.put('/:id', controller.update);
	router.patch('/:id', controller.update);
	router['delete']('/:id', controller.destroy);
	
	module.exports = router;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Using Rails-like standard naming convention for endpoints.
	 * GET     /things              ->  index
	 * POST    /things              ->  create
	 * GET     /things/:id          ->  show
	 * PUT     /things/:id          ->  update
	 * DELETE  /things/:id          ->  destroy
	 */
	
	'use strict';
	
	var _ = __webpack_require__(31);
	var Thing = __webpack_require__(6);
	
	// Get list of things
	exports.index = function (req, res) {
	  Thing.find(function (err, things) {
	    if (err) {
	      return handleError(res, err);
	    }
	    return res.status(200).json(things);
	  });
	};
	
	// Get a single thing
	exports.show = function (req, res) {
	  Thing.findById(req.params.id, function (err, thing) {
	    if (err) {
	      return handleError(res, err);
	    }
	    if (!thing) {
	      return res.status(404).send('Not Found');
	    }
	    return res.json(thing);
	  });
	};
	
	// Creates a new thing in the DB.
	exports.create = function (req, res) {
	  Thing.create(req.body, function (err, thing) {
	    if (err) {
	      return handleError(res, err);
	    }
	    return res.status(201).json(thing);
	  });
	};
	
	// Updates an existing thing in the DB.
	exports.update = function (req, res) {
	  if (req.body._id) {
	    delete req.body._id;
	  }
	  Thing.findById(req.params.id, function (err, thing) {
	    if (err) {
	      return handleError(res, err);
	    }
	    if (!thing) {
	      return res.status(404).send('Not Found');
	    }
	    var updated = _.merge(thing, req.body);
	    updated.save(function (err) {
	      if (err) {
	        return handleError(res, err);
	      }
	      return res.status(200).json(thing);
	    });
	  });
	};
	
	// Deletes a thing from the DB.
	exports.destroy = function (req, res) {
	  Thing.findById(req.params.id, function (err, thing) {
	    if (err) {
	      return handleError(res, err);
	    }
	    if (!thing) {
	      return res.status(404).send('Not Found');
	    }
	    thing.remove(function (err) {
	      if (err) {
	        return handleError(res, err);
	      }
	      return res.status(204).send('No Content');
	    });
	  });
	};
	
	function handleError(res, err) {
	  return res.status(500).send(err);
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Broadcast updates to client when the model changes
	 */
	
	'use strict';
	
	var thing = __webpack_require__(6);
	
	exports.register = function (socket) {
	  thing.schema.post('save', function (doc) {
	    onSave(socket, doc);
	  });
	  thing.schema.post('remove', function (doc) {
	    onRemove(socket, doc);
	  });
	};
	
	function onSave(socket, doc, cb) {
	  socket.emit('thing:save', doc);
	}
	
	function onRemove(socket, doc, cb) {
	  socket.emit('thing:remove', doc);
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var express = __webpack_require__(2);
	var controller = __webpack_require__(18);
	var config = __webpack_require__(1);
	var auth = __webpack_require__(8);
	
	var router = express.Router();
	
	router.get('/', auth.hasRole('admin'), controller.index);
	router['delete']('/:id', auth.hasRole('admin'), controller.destroy);
	router.get('/me', auth.isAuthenticated(), controller.me);
	router.put('/:id/password', auth.isAuthenticated(), controller.changePassword);
	router.get('/:id', auth.isAuthenticated(), controller.show);
	router.post('/', controller.create);
	
	module.exports = router;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var User = __webpack_require__(4);
	var passport = __webpack_require__(3);
	var config = __webpack_require__(1);
	var jwt = __webpack_require__(9);
	
	var validationError = function validationError(res, err) {
	  return res.status(422).json(err);
	};
	
	/**
	 * Get list of users
	 * restriction: 'admin'
	 */
	exports.index = function (req, res) {
	  User.find({}, '-salt -hashedPassword', function (err, users) {
	    if (err) return res.status(500).send(err);
	    res.status(200).json(users);
	  });
	};
	
	/**
	 * Creates a new user
	 */
	exports.create = function (req, res, next) {
	  var newUser = new User(req.body);
	  newUser.provider = 'local';
	  newUser.role = 'user';
	  newUser.save(function (err, user) {
	    if (err) return validationError(res, err);
	    var token = jwt.sign({ _id: user._id }, config.secrets.session, { expiresInMinutes: 60 * 5 });
	    res.json({ token: token });
	  });
	};
	
	/**
	 * Get a single user
	 */
	exports.show = function (req, res, next) {
	  var userId = req.params.id;
	
	  User.findById(userId, function (err, user) {
	    if (err) return next(err);
	    if (!user) return res.status(401).send('Unauthorized');
	    res.json(user.profile);
	  });
	};
	
	/**
	 * Deletes a user
	 * restriction: 'admin'
	 */
	exports.destroy = function (req, res) {
	  User.findByIdAndRemove(req.params.id, function (err, user) {
	    if (err) return res.status(500).send(err);
	    return res.status(204).send('No Content');
	  });
	};
	
	/**
	 * Change a users password
	 */
	exports.changePassword = function (req, res, next) {
	  var userId = req.user._id;
	  var oldPass = String(req.body.oldPassword);
	  var newPass = String(req.body.newPassword);
	
	  User.findById(userId, function (err, user) {
	    if (user.authenticate(oldPass)) {
	      user.password = newPass;
	      user.save(function (err) {
	        if (err) return validationError(res, err);
	        res.status(200).send('OK');
	      });
	    } else {
	      res.status(403).send('Forbidden');
	    }
	  });
	};
	
	/**
	 * Get my info
	 */
	exports.me = function (req, res, next) {
	  var userId = req.user._id;
	  User.findOne({
	    _id: userId
	  }, '-salt -hashedPassword', function (err, user) {
	    // don't ever give out the password or salt
	    if (err) return next(err);
	    if (!user) return res.status(401).send('Unauthorized');
	    res.json(user);
	  });
	};
	
	/**
	 * Authentication callback
	 */
	exports.authCallback = function (req, res, next) {
	  res.redirect('/');
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _express = __webpack_require__(2);
	
	var _express2 = _interopRequireDefault(_express);
	
	var _serveFavicon = __webpack_require__(35);
	
	var _serveFavicon2 = _interopRequireDefault(_serveFavicon);
	
	var _morgan = __webpack_require__(33);
	
	var _morgan2 = _interopRequireDefault(_morgan);
	
	var _compression = __webpack_require__(25);
	
	var _compression2 = _interopRequireDefault(_compression);
	
	var _bodyParser = __webpack_require__(23);
	
	var _bodyParser2 = _interopRequireDefault(_bodyParser);
	
	var _methodOverride = __webpack_require__(32);
	
	var _methodOverride2 = _interopRequireDefault(_methodOverride);
	
	var _cookieParser = __webpack_require__(26);
	
	var _cookieParser2 = _interopRequireDefault(_cookieParser);
	
	var _errorhandler = __webpack_require__(28);
	
	var _errorhandler2 = _interopRequireDefault(_errorhandler);
	
	var _path = __webpack_require__(10);
	
	var _path2 = _interopRequireDefault(_path);
	
	var _config = __webpack_require__(1);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _passport = __webpack_require__(3);
	
	var _passport2 = _interopRequireDefault(_passport);
	
	module.exports = function (app) {
	  var env = app.get('env');
	
	  app.use((0, _compression2['default'])());
	  app.use(_bodyParser2['default'].urlencoded({ extended: false }));
	  app.use(_bodyParser2['default'].json());
	  app.use((0, _methodOverride2['default'])());
	
	  app.use((0, _cookieParser2['default'])());
	
	  app.use(_passport2['default'].initialize());
	
	  app.set('views', _config2['default'].root + '/server/views');
	  app.set('view engine', 'jade');
	
	  app.use(_express2['default']['static'](_path2['default'].join(__dirname, '/public')));
	  app.set('appPath', _path2['default'].join(__dirname, '/public'));
	
	  app.use((0, _serveFavicon2['default'])(_path2['default'].join(__dirname, '/public/favicon.ico')));
	
	  app.use((0, _morgan2['default'])('dev'));
	
	  if (env !== 'production') {
	    app.use((0, _errorhandler2['default'])());
	  }
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _winston = __webpack_require__(7);
	
	var _winston2 = _interopRequireDefault(_winston);
	
	var _apiThingThingModel = __webpack_require__(6);
	
	var _apiThingThingModel2 = _interopRequireDefault(_apiThingThingModel);
	
	var _apiUserUserModel = __webpack_require__(4);
	
	var _apiUserUserModel2 = _interopRequireDefault(_apiUserUserModel);
	
	_apiThingThingModel2['default'].find({}).remove(function () {
	  _apiThingThingModel2['default'].create({
	    name: 'Development Tools',
	    info: 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
	  }, {
	    name: 'Server and Client integration',
	    info: 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
	  }, {
	    name: 'Smart Build System',
	    info: 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
	  }, {
	    name: 'Modular Structure',
	    info: 'Best practice client and server structures allow for more code reusability and maximum scalability'
	  }, {
	    name: 'Optimized Build',
	    info: 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
	  }, {
	    name: 'Deployment Ready',
	    info: 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
	  });
	});
	
	_apiUserUserModel2['default'].find({}).remove(function () {
	  _apiUserUserModel2['default'].create({
	    provider: 'local',
	    name: 'Test User',
	    email: 'test@test.com',
	    password: 'test'
	  }, {
	    provider: 'local',
	    role: 'admin',
	    name: 'Admin',
	    email: 'admin@admin.com',
	    password: 'admin'
	  }, function () {
	    _winston2['default'].log('info', 'finished populating users');
	  });
	});

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _winston = __webpack_require__(7);
	
	var _winston2 = _interopRequireDefault(_winston);
	
	function onDisconnect(socket) {
	  _winston2['default'].log('info', '[%s] DISCONNECTED', socket.address);
	}
	
	function onConnect(socket) {
	  socket.on('info', function (data) {
	    _winston2['default'].log('info', '[%s] %s', socket.address, JSON.stringify(data, null, 2));
	  });
	
	  (0, _winston2['default'])('info', '[%s] CONNECTED', socket.address);
	
	  __webpack_require__(16).register(socket);
	}
	
	module.exports = function (socketio) {
	  socketio.on('connection', function (socket) {
	    socket.address = socket.handshake.address !== null ? socket.handshake.address.address + ':' + socket.handshake.address.port : process.env.DOMAIN;
	
	    socket.connectedAt = new Date();
	
	    socket.on('disconnect', function () {
	      onDisconnect(socket);
	    });
	
	    onConnect(socket);
	  });
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _path = __webpack_require__(10);
	
	var _path2 = _interopRequireDefault(_path);
	
	module.exports = function (app) {
	  // Insert routes below
	  app.use('/api/things', __webpack_require__(14));
	  app.use('/api/users', __webpack_require__(17));
	
	  app.use('/auth', __webpack_require__(11));
	
	  // All undefined asset or api routes should return a 404
	  app.route('/:url(api|auth|components|app|bower_components|assets)/*').get(function (req, res) {
	    res.sendFile(_path2['default'].join(__dirname, '/templates/error404.html'));
	  });
	
	  // All other routes should redirect to the index.html
	  app.route('/*').get(function (req, res) {
	    res.sendFile(_path2['default'].join(__dirname, '/templates/index.html'));
	  });
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = require("body-parser");

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = require("composable-middleware");

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = require("compression");

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = require("cookie-parser");

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = require("crypto");

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = require("errorhandler");

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = require("express-jwt");

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = require("http");

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = require("lodash");

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = require("method-override");

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = require("morgan");

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = require("passport-local");

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = require("serve-favicon");

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = require("socket.io");

/***/ }
/******/ ]);
//# sourceMappingURL=server.js.map