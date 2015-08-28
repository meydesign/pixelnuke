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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __cov_TPHK_S6y_GomLj4aa6l34w = Function('return this')();
	if (!__cov_TPHK_S6y_GomLj4aa6l34w.__coverage__) {
	   __cov_TPHK_S6y_GomLj4aa6l34w.__coverage__ = {};
	}
	__cov_TPHK_S6y_GomLj4aa6l34w = __cov_TPHK_S6y_GomLj4aa6l34w.__coverage__;
	if (!__cov_TPHK_S6y_GomLj4aa6l34w['/Users/mhiatt/Projects/pixelnuke/src/server.js']) {
	   __cov_TPHK_S6y_GomLj4aa6l34w['/Users/mhiatt/Projects/pixelnuke/src/server.js'] = { "path": "/Users/mhiatt/Projects/pixelnuke/src/server.js", "s": { "1": 1, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, "8": 0, "9": 0, "10": 0, "11": 0, "12": 0, "13": 0, "14": 0, "15": 0, "16": 0, "17": 0, "18": 0, "19": 0, "20": 0, "21": 0, "22": 0, "23": 0, "24": 0, "25": 0, "26": 0, "27": 0, "28": 0, "29": 0, "30": 0, "31": 0, "32": 0, "33": 0, "34": 0, "35": 0, "36": 0, "37": 0, "38": 0, "39": 0, "40": 0, "41": 0, "42": 0, "43": 0, "44": 0, "45": 0, "46": 0, "47": 0, "48": 0, "49": 0, "50": 0, "51": 0, "52": 0, "53": 0, "54": 0, "55": 0, "56": 0, "57": 0, "58": 0, "59": 0, "60": 0, "61": 0, "62": 0, "63": 0, "64": 0, "65": 0, "66": 0, "67": 0 }, "b": { "1": [0, 0], "2": [0, 0], "3": [0, 0], "4": [0, 0], "5": [0, 0], "6": [0, 0], "7": [0, 0] }, "f": { "1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0 }, "fnMap": { "1": { "name": "_interopRequireDefault", "line": 3, "loc": { "start": { "line": 0, "column": 0 }, "end": { "line": 0, "column": 0 } }, "skip": true }, "2": { "name": "(anonymous_2)", "line": 55, "loc": { "start": { "line": 16, "column": 32 }, "end": { "line": 16, "column": 41 } } }, "3": { "name": "(anonymous_3)", "line": 97, "loc": { "start": { "line": 59, "column": 7 }, "end": { "line": 59, "column": 21 } } }, "4": { "name": "(anonymous_4)", "line": 102, "loc": { "start": { "line": 66, "column": 50 }, "end": { "line": 66, "column": 56 } } }, "5": { "name": "(anonymous_5)", "line": 108, "loc": { "start": { "line": 72, "column": 22 }, "end": { "line": 72, "column": 34 } } }, "6": { "name": "(anonymous_6)", "line": 113, "loc": { "start": { "line": 79, "column": 28 }, "end": { "line": 79, "column": 34 } } }, "7": { "name": "(anonymous_7)", "line": 117, "loc": { "start": { "line": 83, "column": 22 }, "end": { "line": 83, "column": 32 } } } }, "statementMap": { "1": { "start": { "line": 0, "column": 0 }, "end": { "line": 0, "column": 0 }, "skip": true }, "2": { "start": { "line": 0, "column": 0 }, "end": { "line": 0, "column": 0 }, "skip": true }, "3": { "start": { "line": 0, "column": 0 }, "end": { "line": 0, "column": 0 }, "skip": true }, "4": { "start": { "line": 0, "column": 0 }, "end": { "line": 0, "column": 0 }, "skip": true }, "5": { "start": { "line": 0, "column": 0 }, "end": { "line": 0, "column": 0 }, "skip": true }, "6": { "start": { "line": 0, "column": 0 }, "end": { "line": 0, "column": 0 }, "skip": true }, "7": { "start": { "line": 0, "column": 0 }, "end": { "line": 0, "column": 0 }, "skip": true }, "8": { "start": { "line": 0, "column": 0 }, "end": { "line": 0, "column": 0 }, "skip": true }, "9": { "start": { "line": 0, "column": 0 }, "end": { "line": 0, "column": 0 }, "skip": true }, "10": { "start": { "line": 0, "column": 0 }, "end": { "line": 0, "column": 0 }, "skip": true }, "11": { "start": { "line": 0, "column": 0 }, "end": { "line": 0, "column": 0 }, "skip": true }, "12": { "start": { "line": 0, "column": 0 }, "end": { "line": 0, "column": 0 }, "skip": true }, "13": { "start": { "line": 0, "column": 0 }, "end": { "line": 0, "column": 0 }, "skip": true }, "14": { "start": { "line": 0, "column": 0 }, "end": { "line": 0, "column": 0 }, "skip": true }, "15": { "start": { "line": 0, "column": 0 }, "end": { "line": 0, "column": 0 }, "skip": true }, "16": { "start": { "line": 0, "column": 0 }, "end": { "line": 0, "column": 0 }, "skip": true }, "17": { "start": { "line": 0, "column": 0 }, "end": { "line": 0, "column": 0 }, "skip": true }, "18": { "start": { "line": 0, "column": 0 }, "end": { "line": 0, "column": 0 }, "skip": true }, "19": { "start": { "line": 0, "column": 0 }, "end": { "line": 0, "column": 0 }, "skip": true }, "20": { "start": { "line": 0, "column": 0 }, "end": { "line": 0, "column": 0 }, "skip": true }, "21": { "start": { "line": 0, "column": 0 }, "end": { "line": 0, "column": 0 }, "skip": true }, "22": { "start": { "line": 0, "column": 0 }, "end": { "line": 0, "column": 0 }, "skip": true }, "23": { "start": { "line": 0, "column": 0 }, "end": { "line": 0, "column": 0 }, "skip": true }, "24": { "start": { "line": 0, "column": 0 }, "end": { "line": 0, "column": 0 }, "skip": true }, "25": { "start": { "line": 0, "column": 0 }, "end": { "line": 0, "column": 0 }, "skip": true }, "26": { "start": { "line": 0, "column": 0 }, "end": { "line": 0, "column": 0 }, "skip": true }, "27": { "start": { "line": 15, "column": 0 }, "end": { "line": 15, "column": 57 } }, "28": { "start": { "line": 16, "column": 0 }, "end": { "line": 19, "column": 3 } }, "29": { "start": { "line": 17, "column": 2 }, "end": { "line": 17, "column": 59 } }, "30": { "start": { "line": 18, "column": 2 }, "end": { "line": 18, "column": 19 } }, "31": { "start": { "line": 22, "column": 0 }, "end": { "line": 25, "column": 1 } }, "32": { "start": { "line": 23, "column": 2 }, "end": { "line": 23, "column": 36 } }, "33": { "start": { "line": 24, "column": 2 }, "end": { "line": 24, "column": 34 } }, "34": { "start": { "line": 28, "column": 0 }, "end": { "line": 28, "column": 22 } }, "35": { "start": { "line": 30, "column": 0 }, "end": { "line": 30, "column": 54 } }, "36": { "start": { "line": 32, "column": 0 }, "end": { "line": 32, "column": 53 } }, "37": { "start": { "line": 33, "column": 0 }, "end": { "line": 33, "column": 31 } }, "38": { "start": { "line": 35, "column": 0 }, "end": { "line": 35, "column": 23 } }, "39": { "start": { "line": 36, "column": 0 }, "end": { "line": 36, "column": 52 } }, "40": { "start": { "line": 37, "column": 0 }, "end": { "line": 37, "column": 27 } }, "41": { "start": { "line": 38, "column": 0 }, "end": { "line": 38, "column": 26 } }, "42": { "start": { "line": 40, "column": 0 }, "end": { "line": 40, "column": 24 } }, "43": { "start": { "line": 42, "column": 0 }, "end": { "line": 42, "column": 31 } }, "44": { "start": { "line": 44, "column": 0 }, "end": { "line": 44, "column": 57 } }, "45": { "start": { "line": 46, "column": 0 }, "end": { "line": 46, "column": 23 } }, "46": { "start": { "line": 48, "column": 0 }, "end": { "line": 50, "column": 1 } }, "47": { "start": { "line": 49, "column": 2 }, "end": { "line": 49, "column": 26 } }, "48": { "start": { "line": 52, "column": 0 }, "end": { "line": 52, "column": 47 } }, "49": { "start": { "line": 53, "column": 0 }, "end": { "line": 53, "column": 45 } }, "50": { "start": { "line": 55, "column": 0 }, "end": { "line": 55, "column": 40 } }, "51": { "start": { "line": 58, "column": 0 }, "end": { "line": 63, "column": 5 } }, "52": { "start": { "line": 60, "column": 4 }, "end": { "line": 62, "column": 66 } }, "53": { "start": { "line": 66, "column": 0 }, "end": { "line": 97, "column": 3 } }, "54": { "start": { "line": 67, "column": 2 }, "end": { "line": 70, "column": 5 } }, "55": { "start": { "line": 72, "column": 2 }, "end": { "line": 90, "column": 5 } }, "56": { "start": { "line": 73, "column": 4 }, "end": { "line": 75, "column": 27 } }, "57": { "start": { "line": 77, "column": 4 }, "end": { "line": 77, "column": 36 } }, "58": { "start": { "line": 79, "column": 4 }, "end": { "line": 81, "column": 7 } }, "59": { "start": { "line": 80, "column": 6 }, "end": { "line": 80, "column": 73 } }, "60": { "start": { "line": 83, "column": 4 }, "end": { "line": 85, "column": 7 } }, "61": { "start": { "line": 84, "column": 6 }, "end": { "line": 84, "column": 84 } }, "62": { "start": { "line": 87, "column": 4 }, "end": { "line": 87, "column": 58 } }, "63": { "start": { "line": 89, "column": 4 }, "end": { "line": 89, "column": 57 } }, "64": { "start": { "line": 92, "column": 2 }, "end": { "line": 96, "column": 3 } }, "65": { "start": { "line": 93, "column": 4 }, "end": { "line": 93, "column": 27 } }, "66": { "start": { "line": 95, "column": 4 }, "end": { "line": 95, "column": 99 } }, "67": { "start": { "line": 100, "column": 0 }, "end": { "line": 100, "column": 31 } } }, "branchMap": { "1": { "line": 3, "type": "cond-expr", "locations": [{ "start": { "line": 0, "column": 0 }, "end": { "line": 0, "column": 0 }, "skip": true }, { "start": { "line": 0, "column": 0 }, "end": { "line": 0, "column": 0 }, "skip": true }] }, "2": { "line": 3, "type": "binary-expr", "locations": [{ "start": { "line": 0, "column": 0 }, "end": { "line": 0, "column": 0 }, "skip": true }, { "start": { "line": 0, "column": 0 }, "end": { "line": 0, "column": 0 }, "skip": true }] }, "3": { "line": 61, "type": "if", "locations": [{ "start": { "line": 22, "column": 0 }, "end": { "line": 22, "column": 0 } }, { "start": { "line": 22, "column": 0 }, "end": { "line": 22, "column": 0 } }] }, "4": { "line": 69, "type": "binary-expr", "locations": [{ "start": { "line": 30, "column": 15 }, "end": { "line": 30, "column": 35 } }, { "start": { "line": 30, "column": 39 }, "end": { "line": 30, "column": 52 } }] }, "5": { "line": 87, "type": "if", "locations": [{ "start": { "line": 48, "column": 0 }, "end": { "line": 48, "column": 0 } }, { "start": { "line": 48, "column": 0 }, "end": { "line": 48, "column": 0 } }] }, "6": { "line": 109, "type": "cond-expr", "locations": [{ "start": { "line": 74, "column": 8 }, "end": { "line": 74, "column": 32 } }, { "start": { "line": 75, "column": 8 }, "end": { "line": 75, "column": 26 } }] }, "7": { "line": 126, "type": "if", "locations": [{ "start": { "line": 92, "column": 2 }, "end": { "line": 92, "column": 2 } }, { "start": { "line": 92, "column": 2 }, "end": { "line": 92, "column": 2 } }] } }, "code": ["import express from 'express';", "import morgan from 'morgan';", "import compression from 'compression';", "import bodyParser from 'body-parser';", "import methodOverride from 'method-override';", "import cookieParser from 'cookie-parser';", "import errorHandler from 'errorhandler';", "import config from 'config';", "import passport from 'passport';", "import mongoose from 'mongoose';", "import winston from 'winston';", "import path from 'path';", "", "// Connect to database", "mongoose.connect(config.mongo.uri, config.mongo.options);", "mongoose.connection.on('error', (err) => {", "  winston.log('error', 'MongoDB connection error: ' + err);", "  process.exit(-1);", "});", "", "// Populate DB with sample data", "if (config.seedDB) {", "  require('./api/thing/thing.seed');", "  require('./api/user/user.seed');", "}", "", "// Setup server", "const app = express();", "", "app.set('env', process.env.NODE_ENV || 'development');", "", "app.set('views', path.join(__dirname, '/templates'));", "app.set('view engine', 'jade');", "", "app.use(compression());", "app.use(bodyParser.urlencoded({ extended: false }));", "app.use(bodyParser.json());", "app.use(methodOverride());", "", "app.use(cookieParser());", "", "app.use(passport.initialize());", "", "app.use(express.static(path.join(__dirname, '/public')));", "", "app.use(morgan('dev'));", "", "if (app.get('env') !== 'production') {", "  app.use(errorHandler());", "}", "", "app.use('/api/things', require('./api/thing'));", "app.use('/api/users', require('./api/user'));", "", "app.use('/auth', require('./api/auth'));", "", "// All undefined asset or api routes should return a 404", "app.route('/:url(api|auth|components|app|bower_components|assets)/*')", "  .get((req, res) => {", "    res", "      .status(404)", "      .sendFile(path.join(__dirname, '/templates/error404.html'));", "  });", "", "// Start server", "const server = app.listen(config.port, config.ip, () => {", "  const io = require('socket.io')(server, {", "    serveClient: true,", "    path: '/socket.io-client',", "  });", "", "  io.on('connection', (socket) => {", "    socket.address = socket.handshake.address !== null", "      ? socket.handshake.address", "      : process.env.DOMAIN;", "", "    socket.connectedAt = new Date();", "", "    socket.on('disconnect', () => {", "      winston.log('info', '[%s] DISCONNECTED', socket.handshake.address);", "    });", "", "    socket.on('info', (data) => {", "      winston.log('info', '[%s] %s', socket.address, JSON.stringify(data, null, 2));", "    });", "", "    winston.log('info', '[%s] CONNECTED', socket.address);", "", "    require('./api/thing/thing.socket').register(socket);", "  });", "", "  if (process.send) {", "    process.send('online');", "  } else {", "    winston.log('info', 'Express server listening on %d, in %s mode', config.port, app.get('env'));", "  }", "});", "", "// Expose app", "exports = module.exports = app;", ""] };
	}
	__cov_TPHK_S6y_GomLj4aa6l34w = __cov_TPHK_S6y_GomLj4aa6l34w['/Users/mhiatt/Projects/pixelnuke/src/server.js'];
	function _interopRequireDefault(obj) {
	   __cov_TPHK_S6y_GomLj4aa6l34w.f['1']++;__cov_TPHK_S6y_GomLj4aa6l34w.s['2']++;return (__cov_TPHK_S6y_GomLj4aa6l34w.b['2'][0]++, obj) && (__cov_TPHK_S6y_GomLj4aa6l34w.b['2'][1]++, obj.__esModule) ? (__cov_TPHK_S6y_GomLj4aa6l34w.b['1'][0]++, obj) : (__cov_TPHK_S6y_GomLj4aa6l34w.b['1'][1]++, { 'default': obj });
	}__cov_TPHK_S6y_GomLj4aa6l34w.s['3']++;var _express = __webpack_require__(1);__cov_TPHK_S6y_GomLj4aa6l34w.s['4']++;var _express2 = _interopRequireDefault(_express);__cov_TPHK_S6y_GomLj4aa6l34w.s['5']++;var _morgan = __webpack_require__(2);__cov_TPHK_S6y_GomLj4aa6l34w.s['6']++;var _morgan2 = _interopRequireDefault(_morgan);__cov_TPHK_S6y_GomLj4aa6l34w.s['7']++;var _compression = __webpack_require__(3);__cov_TPHK_S6y_GomLj4aa6l34w.s['8']++;var _compression2 = _interopRequireDefault(_compression);__cov_TPHK_S6y_GomLj4aa6l34w.s['9']++;var _bodyParser = __webpack_require__(4);__cov_TPHK_S6y_GomLj4aa6l34w.s['10']++;var _bodyParser2 = _interopRequireDefault(_bodyParser);__cov_TPHK_S6y_GomLj4aa6l34w.s['11']++;var _methodOverride = __webpack_require__(5);__cov_TPHK_S6y_GomLj4aa6l34w.s['12']++;var _methodOverride2 = _interopRequireDefault(_methodOverride);__cov_TPHK_S6y_GomLj4aa6l34w.s['13']++;var _cookieParser = __webpack_require__(6);__cov_TPHK_S6y_GomLj4aa6l34w.s['14']++;var _cookieParser2 = _interopRequireDefault(_cookieParser);__cov_TPHK_S6y_GomLj4aa6l34w.s['15']++;var _errorhandler = __webpack_require__(7);__cov_TPHK_S6y_GomLj4aa6l34w.s['16']++;var _errorhandler2 = _interopRequireDefault(_errorhandler);__cov_TPHK_S6y_GomLj4aa6l34w.s['17']++;var _config = __webpack_require__(8);__cov_TPHK_S6y_GomLj4aa6l34w.s['18']++;var _config2 = _interopRequireDefault(_config);__cov_TPHK_S6y_GomLj4aa6l34w.s['19']++;var _passport = __webpack_require__(9);__cov_TPHK_S6y_GomLj4aa6l34w.s['20']++;var _passport2 = _interopRequireDefault(_passport);__cov_TPHK_S6y_GomLj4aa6l34w.s['21']++;var _mongoose = __webpack_require__(10);__cov_TPHK_S6y_GomLj4aa6l34w.s['22']++;var _mongoose2 = _interopRequireDefault(_mongoose);__cov_TPHK_S6y_GomLj4aa6l34w.s['23']++;var _winston = __webpack_require__(11);__cov_TPHK_S6y_GomLj4aa6l34w.s['24']++;var _winston2 = _interopRequireDefault(_winston);__cov_TPHK_S6y_GomLj4aa6l34w.s['25']++;var _path = __webpack_require__(12);__cov_TPHK_S6y_GomLj4aa6l34w.s['26']++;var _path2 = _interopRequireDefault(_path);__cov_TPHK_S6y_GomLj4aa6l34w.s['27']++;_mongoose2['default'].connect(_config2['default'].mongo.uri, _config2['default'].mongo.options);__cov_TPHK_S6y_GomLj4aa6l34w.s['28']++;_mongoose2['default'].connection.on('error', function (err) {
	   __cov_TPHK_S6y_GomLj4aa6l34w.f['2']++;__cov_TPHK_S6y_GomLj4aa6l34w.s['29']++;_winston2['default'].log('error', 'MongoDB connection error: ' + err);__cov_TPHK_S6y_GomLj4aa6l34w.s['30']++;process.exit(-1);
	});__cov_TPHK_S6y_GomLj4aa6l34w.s['31']++;if (_config2['default'].seedDB) {
	   __cov_TPHK_S6y_GomLj4aa6l34w.b['3'][0]++;__cov_TPHK_S6y_GomLj4aa6l34w.s['32']++;__webpack_require__(13);__cov_TPHK_S6y_GomLj4aa6l34w.s['33']++;__webpack_require__(15);
	} else {
	   __cov_TPHK_S6y_GomLj4aa6l34w.b['3'][1]++;
	}__cov_TPHK_S6y_GomLj4aa6l34w.s['34']++;var app = (0, _express2['default'])();__cov_TPHK_S6y_GomLj4aa6l34w.s['35']++;app.set('env', (__cov_TPHK_S6y_GomLj4aa6l34w.b['4'][0]++, process.env.NODE_ENV) || (__cov_TPHK_S6y_GomLj4aa6l34w.b['4'][1]++, 'development'));__cov_TPHK_S6y_GomLj4aa6l34w.s['36']++;app.set('views', _path2['default'].join(__dirname, '/templates'));__cov_TPHK_S6y_GomLj4aa6l34w.s['37']++;app.set('view engine', 'jade');__cov_TPHK_S6y_GomLj4aa6l34w.s['38']++;app.use((0, _compression2['default'])());__cov_TPHK_S6y_GomLj4aa6l34w.s['39']++;app.use(_bodyParser2['default'].urlencoded({ extended: false }));__cov_TPHK_S6y_GomLj4aa6l34w.s['40']++;app.use(_bodyParser2['default'].json());__cov_TPHK_S6y_GomLj4aa6l34w.s['41']++;app.use((0, _methodOverride2['default'])());__cov_TPHK_S6y_GomLj4aa6l34w.s['42']++;app.use((0, _cookieParser2['default'])());__cov_TPHK_S6y_GomLj4aa6l34w.s['43']++;app.use(_passport2['default'].initialize());__cov_TPHK_S6y_GomLj4aa6l34w.s['44']++;app.use(_express2['default']['static'](_path2['default'].join(__dirname, '/public')));__cov_TPHK_S6y_GomLj4aa6l34w.s['45']++;app.use((0, _morgan2['default'])('dev'));__cov_TPHK_S6y_GomLj4aa6l34w.s['46']++;if (app.get('env') !== 'production') {
	   __cov_TPHK_S6y_GomLj4aa6l34w.b['5'][0]++;__cov_TPHK_S6y_GomLj4aa6l34w.s['47']++;app.use((0, _errorhandler2['default'])());
	} else {
	   __cov_TPHK_S6y_GomLj4aa6l34w.b['5'][1]++;
	}__cov_TPHK_S6y_GomLj4aa6l34w.s['48']++;app.use('/api/things', __webpack_require__(18));__cov_TPHK_S6y_GomLj4aa6l34w.s['49']++;app.use('/api/users', __webpack_require__(21));__cov_TPHK_S6y_GomLj4aa6l34w.s['50']++;app.use('/auth', __webpack_require__(27));__cov_TPHK_S6y_GomLj4aa6l34w.s['51']++;app.route('/:url(api|auth|components|app|bower_components|assets)/*').get(function (req, res) {
	   __cov_TPHK_S6y_GomLj4aa6l34w.f['3']++;__cov_TPHK_S6y_GomLj4aa6l34w.s['52']++;res.status(404).sendFile(_path2['default'].join(__dirname, '/templates/error404.html'));
	});__cov_TPHK_S6y_GomLj4aa6l34w.s['53']++;var server = app.listen(_config2['default'].port, _config2['default'].ip, function () {
	   __cov_TPHK_S6y_GomLj4aa6l34w.f['4']++;__cov_TPHK_S6y_GomLj4aa6l34w.s['54']++;var io = __webpack_require__(31)(server, { serveClient: true, path: '/socket.io-client' });__cov_TPHK_S6y_GomLj4aa6l34w.s['55']++;io.on('connection', function (socket) {
	      __cov_TPHK_S6y_GomLj4aa6l34w.f['5']++;__cov_TPHK_S6y_GomLj4aa6l34w.s['56']++;socket.address = socket.handshake.address !== null ? (__cov_TPHK_S6y_GomLj4aa6l34w.b['6'][0]++, socket.handshake.address) : (__cov_TPHK_S6y_GomLj4aa6l34w.b['6'][1]++, process.env.DOMAIN);__cov_TPHK_S6y_GomLj4aa6l34w.s['57']++;socket.connectedAt = new Date();__cov_TPHK_S6y_GomLj4aa6l34w.s['58']++;socket.on('disconnect', function () {
	         __cov_TPHK_S6y_GomLj4aa6l34w.f['6']++;__cov_TPHK_S6y_GomLj4aa6l34w.s['59']++;_winston2['default'].log('info', '[%s] DISCONNECTED', socket.handshake.address);
	      });__cov_TPHK_S6y_GomLj4aa6l34w.s['60']++;socket.on('info', function (data) {
	         __cov_TPHK_S6y_GomLj4aa6l34w.f['7']++;__cov_TPHK_S6y_GomLj4aa6l34w.s['61']++;_winston2['default'].log('info', '[%s] %s', socket.address, JSON.stringify(data, null, 2));
	      });__cov_TPHK_S6y_GomLj4aa6l34w.s['62']++;_winston2['default'].log('info', '[%s] CONNECTED', socket.address);__cov_TPHK_S6y_GomLj4aa6l34w.s['63']++;__webpack_require__(32).register(socket);
	   });__cov_TPHK_S6y_GomLj4aa6l34w.s['64']++;if (process.send) {
	      __cov_TPHK_S6y_GomLj4aa6l34w.b['7'][0]++;__cov_TPHK_S6y_GomLj4aa6l34w.s['65']++;process.send('online');
	   } else {
	      __cov_TPHK_S6y_GomLj4aa6l34w.b['7'][1]++;__cov_TPHK_S6y_GomLj4aa6l34w.s['66']++;_winston2['default'].log('info', 'Express server listening on %d, in %s mode', _config2['default'].port, app.get('env'));
	   }
	});__cov_TPHK_S6y_GomLj4aa6l34w.s['67']++;exports = module.exports = app;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("morgan");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("compression");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("body-parser");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("method-override");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("cookie-parser");

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("errorhandler");

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("config");

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = require("passport");

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("mongoose");

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = require("winston");

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __cov_h4I9recZYQ_9wWo3HkjirA = Function('return this')();
	if (!__cov_h4I9recZYQ_9wWo3HkjirA.__coverage__) {
	   __cov_h4I9recZYQ_9wWo3HkjirA.__coverage__ = {};
	}
	__cov_h4I9recZYQ_9wWo3HkjirA = __cov_h4I9recZYQ_9wWo3HkjirA.__coverage__;
	if (!__cov_h4I9recZYQ_9wWo3HkjirA['/Users/mhiatt/Projects/pixelnuke/src/api/thing/thing.seed.js']) {
	   __cov_h4I9recZYQ_9wWo3HkjirA['/Users/mhiatt/Projects/pixelnuke/src/api/thing/thing.seed.js'] = { "path": "/Users/mhiatt/Projects/pixelnuke/src/api/thing/thing.seed.js", "s": { "1": 1, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0 }, "b": { "1": [0, 0], "2": [0, 0] }, "f": { "1": 0, "2": 0, "3": 0 }, "fnMap": { "1": { "name": "_interopRequireDefault", "line": 3, "loc": { "start": { "line": 0, "column": 0 }, "end": { "line": 0, "column": 0 } }, "skip": true }, "2": { "name": "(anonymous_2)", "line": 9, "loc": { "start": { "line": 5, "column": 10 }, "end": { "line": 5, "column": 16 } } }, "3": { "name": "(anonymous_3)", "line": 28, "loc": { "start": { "line": 31, "column": 6 }, "end": { "line": 31, "column": 12 } } } }, "statementMap": { "1": { "start": { "line": 0, "column": 0 }, "end": { "line": 0, "column": 0 }, "skip": true }, "2": { "start": { "line": 0, "column": 0 }, "end": { "line": 0, "column": 0 }, "skip": true }, "3": { "start": { "line": 0, "column": 0 }, "end": { "line": 0, "column": 0 }, "skip": true }, "4": { "start": { "line": 0, "column": 0 }, "end": { "line": 0, "column": 0 }, "skip": true }, "5": { "start": { "line": 3, "column": 0 }, "end": { "line": 35, "column": 5 } }, "6": { "start": { "line": 6, "column": 4 }, "end": { "line": 34, "column": 6 } }, "7": { "start": { "line": 32, "column": 8 }, "end": { "line": 32, "column": 58 } } }, "branchMap": { "1": { "line": 3, "type": "cond-expr", "locations": [{ "start": { "line": 0, "column": 0 }, "end": { "line": 0, "column": 0 }, "skip": true }, { "start": { "line": 0, "column": 0 }, "end": { "line": 0, "column": 0 }, "skip": true }] }, "2": { "line": 3, "type": "binary-expr", "locations": [{ "start": { "line": 0, "column": 0 }, "end": { "line": 0, "column": 0 }, "skip": true }, { "start": { "line": 0, "column": 0 }, "end": { "line": 0, "column": 0 }, "skip": true }] } }, "code": ["import Thing from './thing.model';", "", "Thing", "  .find({})", "  .remove(() => {", "    Thing.create(", "      {", "        name: 'Development Tools',", "        info: 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.',", "      },", "      {", "        name: 'Server and Client integration',", "        info: 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.',", "      },", "      {", "        name: 'Smart Build System',", "        info: 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html',", "      },", "      {", "        name: 'Modular Structure',", "        info: 'Best practice client and server structures allow for more code reusability and maximum scalability',", "      },", "      {", "        name: 'Optimized Build',", "        info: 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.',", "      },", "      {", "        name: 'Deployment Ready',", "        info: 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators',", "      },", "      () => {", "        winston.log('info', 'finished populating things');", "      }", "    );", "  });", ""] };
	}
	__cov_h4I9recZYQ_9wWo3HkjirA = __cov_h4I9recZYQ_9wWo3HkjirA['/Users/mhiatt/Projects/pixelnuke/src/api/thing/thing.seed.js'];
	function _interopRequireDefault(obj) {
	   __cov_h4I9recZYQ_9wWo3HkjirA.f['1']++;__cov_h4I9recZYQ_9wWo3HkjirA.s['2']++;return (__cov_h4I9recZYQ_9wWo3HkjirA.b['2'][0]++, obj) && (__cov_h4I9recZYQ_9wWo3HkjirA.b['2'][1]++, obj.__esModule) ? (__cov_h4I9recZYQ_9wWo3HkjirA.b['1'][0]++, obj) : (__cov_h4I9recZYQ_9wWo3HkjirA.b['1'][1]++, { 'default': obj });
	}__cov_h4I9recZYQ_9wWo3HkjirA.s['3']++;var _thingModel = __webpack_require__(14);__cov_h4I9recZYQ_9wWo3HkjirA.s['4']++;var _thingModel2 = _interopRequireDefault(_thingModel);__cov_h4I9recZYQ_9wWo3HkjirA.s['5']++;_thingModel2['default'].find({}).remove(function () {
	   __cov_h4I9recZYQ_9wWo3HkjirA.f['2']++;__cov_h4I9recZYQ_9wWo3HkjirA.s['6']++;_thingModel2['default'].create({ name: 'Development Tools', info: 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.' }, { name: 'Server and Client integration', info: 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.' }, { name: 'Smart Build System', info: 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html' }, { name: 'Modular Structure', info: 'Best practice client and server structures allow for more code reusability and maximum scalability' }, { name: 'Optimized Build', info: 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.' }, { name: 'Deployment Ready', info: 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators' }, function () {
	      __cov_h4I9recZYQ_9wWo3HkjirA.f['3']++;__cov_h4I9recZYQ_9wWo3HkjirA.s['7']++;winston.log('info', 'finished populating things');
	   });
	});

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __cov_nW4RZ$c_ij7U5$l3a3wlvQ = Function('return this')();
	if (!__cov_nW4RZ$c_ij7U5$l3a3wlvQ.__coverage__) {
	   __cov_nW4RZ$c_ij7U5$l3a3wlvQ.__coverage__ = {};
	}
	__cov_nW4RZ$c_ij7U5$l3a3wlvQ = __cov_nW4RZ$c_ij7U5$l3a3wlvQ.__coverage__;
	if (!__cov_nW4RZ$c_ij7U5$l3a3wlvQ['/Users/mhiatt/Projects/pixelnuke/src/api/thing/thing.model.js']) {
	   __cov_nW4RZ$c_ij7U5$l3a3wlvQ['/Users/mhiatt/Projects/pixelnuke/src/api/thing/thing.model.js'] = { "path": "/Users/mhiatt/Projects/pixelnuke/src/api/thing/thing.model.js", "s": { "1": 0, "2": 0, "3": 0 }, "b": {}, "f": {}, "fnMap": {}, "statementMap": { "1": { "start": { "line": 3, "column": 0 }, "end": { "line": 4, "column": 29 } }, "2": { "start": { "line": 6, "column": 0 }, "end": { "line": 10, "column": 3 } }, "3": { "start": { "line": 12, "column": 0 }, "end": { "line": 12, "column": 54 } } }, "branchMap": {}, "code": ["'use strict';", "", "var mongoose = require('mongoose'),", "    Schema = mongoose.Schema;", "", "var ThingSchema = new Schema({", "  name: String,", "  info: String,", "  active: Boolean", "});", "", "module.exports = mongoose.model('Thing', ThingSchema);"] };
	}
	__cov_nW4RZ$c_ij7U5$l3a3wlvQ = __cov_nW4RZ$c_ij7U5$l3a3wlvQ['/Users/mhiatt/Projects/pixelnuke/src/api/thing/thing.model.js'];
	__cov_nW4RZ$c_ij7U5$l3a3wlvQ.s['1']++;var mongoose = __webpack_require__(10),
	    Schema = mongoose.Schema;__cov_nW4RZ$c_ij7U5$l3a3wlvQ.s['2']++;var ThingSchema = new Schema({ name: String, info: String, active: Boolean });__cov_nW4RZ$c_ij7U5$l3a3wlvQ.s['3']++;module.exports = mongoose.model('Thing', ThingSchema);

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __cov_eIKW8$$BTlKoTyi90v7HEg = Function('return this')();
	if (!__cov_eIKW8$$BTlKoTyi90v7HEg.__coverage__) {
	   __cov_eIKW8$$BTlKoTyi90v7HEg.__coverage__ = {};
	}
	__cov_eIKW8$$BTlKoTyi90v7HEg = __cov_eIKW8$$BTlKoTyi90v7HEg.__coverage__;
	if (!__cov_eIKW8$$BTlKoTyi90v7HEg['/Users/mhiatt/Projects/pixelnuke/src/api/user/user.seed.js']) {
	   __cov_eIKW8$$BTlKoTyi90v7HEg['/Users/mhiatt/Projects/pixelnuke/src/api/user/user.seed.js'] = { "path": "/Users/mhiatt/Projects/pixelnuke/src/api/user/user.seed.js", "s": { "1": 1, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, "8": 0, "9": 0 }, "b": { "1": [0, 0], "2": [0, 0] }, "f": { "1": 0, "2": 0, "3": 0 }, "fnMap": { "1": { "name": "_interopRequireDefault", "line": 3, "loc": { "start": { "line": 0, "column": 0 }, "end": { "line": 0, "column": 0 } }, "skip": true }, "2": { "name": "(anonymous_2)", "line": 13, "loc": { "start": { "line": 7, "column": 10 }, "end": { "line": 7, "column": 16 } } }, "3": { "name": "(anonymous_3)", "line": 25, "loc": { "start": { "line": 22, "column": 6 }, "end": { "line": 22, "column": 12 } } } }, "statementMap": { "1": { "start": { "line": 0, "column": 0 }, "end": { "line": 0, "column": 0 }, "skip": true }, "2": { "start": { "line": 0, "column": 0 }, "end": { "line": 0, "column": 0 }, "skip": true }, "3": { "start": { "line": 0, "column": 0 }, "end": { "line": 0, "column": 0 }, "skip": true }, "4": { "start": { "line": 0, "column": 0 }, "end": { "line": 0, "column": 0 }, "skip": true }, "5": { "start": { "line": 0, "column": 0 }, "end": { "line": 0, "column": 0 }, "skip": true }, "6": { "start": { "line": 0, "column": 0 }, "end": { "line": 0, "column": 0 }, "skip": true }, "7": { "start": { "line": 5, "column": 0 }, "end": { "line": 26, "column": 5 } }, "8": { "start": { "line": 8, "column": 4 }, "end": { "line": 25, "column": 6 } }, "9": { "start": { "line": 23, "column": 8 }, "end": { "line": 23, "column": 57 } } }, "branchMap": { "1": { "line": 3, "type": "cond-expr", "locations": [{ "start": { "line": 0, "column": 0 }, "end": { "line": 0, "column": 0 }, "skip": true }, { "start": { "line": 0, "column": 0 }, "end": { "line": 0, "column": 0 }, "skip": true }] }, "2": { "line": 3, "type": "binary-expr", "locations": [{ "start": { "line": 0, "column": 0 }, "end": { "line": 0, "column": 0 }, "skip": true }, { "start": { "line": 0, "column": 0 }, "end": { "line": 0, "column": 0 }, "skip": true }] } }, "code": ["import winston from 'winston';", "", "import User from './user.model';", "", "User", "  .find({})", "  .remove(() => {", "    User.create(", "      {", "        provider: 'local',", "        name: 'Test User',", "        email: 'test@test.com',", "        password: 'test',", "      },", "      {", "        provider: 'local',", "        role: 'admin',", "        name: 'Admin',", "        email: 'admin@admin.com',", "        password: 'admin',", "      },", "      () => {", "        winston.log('info', 'finished populating users');", "      }", "    );", "  });", ""] };
	}
	__cov_eIKW8$$BTlKoTyi90v7HEg = __cov_eIKW8$$BTlKoTyi90v7HEg['/Users/mhiatt/Projects/pixelnuke/src/api/user/user.seed.js'];
	function _interopRequireDefault(obj) {
	   __cov_eIKW8$$BTlKoTyi90v7HEg.f['1']++;__cov_eIKW8$$BTlKoTyi90v7HEg.s['2']++;return (__cov_eIKW8$$BTlKoTyi90v7HEg.b['2'][0]++, obj) && (__cov_eIKW8$$BTlKoTyi90v7HEg.b['2'][1]++, obj.__esModule) ? (__cov_eIKW8$$BTlKoTyi90v7HEg.b['1'][0]++, obj) : (__cov_eIKW8$$BTlKoTyi90v7HEg.b['1'][1]++, { 'default': obj });
	}__cov_eIKW8$$BTlKoTyi90v7HEg.s['3']++;var _winston = __webpack_require__(11);__cov_eIKW8$$BTlKoTyi90v7HEg.s['4']++;var _winston2 = _interopRequireDefault(_winston);__cov_eIKW8$$BTlKoTyi90v7HEg.s['5']++;var _userModel = __webpack_require__(16);__cov_eIKW8$$BTlKoTyi90v7HEg.s['6']++;var _userModel2 = _interopRequireDefault(_userModel);__cov_eIKW8$$BTlKoTyi90v7HEg.s['7']++;_userModel2['default'].find({}).remove(function () {
	   __cov_eIKW8$$BTlKoTyi90v7HEg.f['2']++;__cov_eIKW8$$BTlKoTyi90v7HEg.s['8']++;_userModel2['default'].create({ provider: 'local', name: 'Test User', email: 'test@test.com', password: 'test' }, { provider: 'local', role: 'admin', name: 'Admin', email: 'admin@admin.com', password: 'admin' }, function () {
	      __cov_eIKW8$$BTlKoTyi90v7HEg.f['3']++;__cov_eIKW8$$BTlKoTyi90v7HEg.s['9']++;_winston2['default'].log('info', 'finished populating users');
	   });
	});

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __cov_IJMrbtA7oS2dLZSmrk15SQ = Function('return this')();
	if (!__cov_IJMrbtA7oS2dLZSmrk15SQ.__coverage__) {
	   __cov_IJMrbtA7oS2dLZSmrk15SQ.__coverage__ = {};
	}
	__cov_IJMrbtA7oS2dLZSmrk15SQ = __cov_IJMrbtA7oS2dLZSmrk15SQ.__coverage__;
	if (!__cov_IJMrbtA7oS2dLZSmrk15SQ['/Users/mhiatt/Projects/pixelnuke/src/api/user/user.model.js']) {
	   __cov_IJMrbtA7oS2dLZSmrk15SQ['/Users/mhiatt/Projects/pixelnuke/src/api/user/user.model.js'] = { "path": "/Users/mhiatt/Projects/pixelnuke/src/api/user/user.model.js", "s": { "1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, "8": 0, "9": 0, "10": 0, "11": 0, "12": 0, "13": 0, "14": 0, "15": 0, "16": 0, "17": 0, "18": 0, "19": 0, "20": 0, "21": 0, "22": 0, "23": 0, "24": 0, "25": 0, "26": 0, "27": 0, "28": 0, "29": 0, "30": 0, "31": 0, "32": 0, "33": 0, "34": 0, "35": 0, "36": 0, "37": 0, "38": 0, "39": 0, "40": 0, "41": 0, "42": 0, "43": 0 }, "b": { "1": [0, 0], "2": [0, 0], "3": [0, 0], "4": [0, 0], "5": [0, 0], "6": [0, 0], "7": [0, 0], "8": [0, 0] }, "f": { "1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, "8": 0, "9": 0, "10": 0, "11": 0, "12": 0, "13": 0 }, "fnMap": { "1": { "name": "(anonymous_1)", "line": 22, "loc": { "start": { "line": 24, "column": 7 }, "end": { "line": 24, "column": 26 } } }, "2": { "name": "(anonymous_2)", "line": 26, "loc": { "start": { "line": 29, "column": 7 }, "end": { "line": 29, "column": 18 } } }, "3": { "name": "(anonymous_3)", "line": 31, "loc": { "start": { "line": 36, "column": 7 }, "end": { "line": 36, "column": 18 } } }, "4": { "name": "(anonymous_4)", "line": 39, "loc": { "start": { "line": 46, "column": 7 }, "end": { "line": 46, "column": 18 } } }, "5": { "name": "(anonymous_5)", "line": 51, "loc": { "start": { "line": 60, "column": 12 }, "end": { "line": 60, "column": 28 } } }, "6": { "name": "(anonymous_6)", "line": 56, "loc": { "start": { "line": 67, "column": 12 }, "end": { "line": 67, "column": 37 } } }, "7": { "name": "(anonymous_7)", "line": 61, "loc": { "start": { "line": 74, "column": 12 }, "end": { "line": 74, "column": 37 } } }, "8": { "name": "(anonymous_8)", "line": 63, "loc": { "start": { "line": 76, "column": 45 }, "end": { "line": 76, "column": 65 } } }, "9": { "name": "validatePresenceOf", "line": 73, "loc": { "start": { "line": 86, "column": 25 }, "end": { "line": 86, "column": 41 } } }, "10": { "name": "(anonymous_10)", "line": 80, "loc": { "start": { "line": 94, "column": 15 }, "end": { "line": 94, "column": 30 } } }, "11": { "name": "authenticate", "line": 97, "loc": { "start": { "line": 114, "column": 16 }, "end": { "line": 114, "column": 36 } } }, "12": { "name": "makeSalt", "line": 107, "loc": { "start": { "line": 124, "column": 12 }, "end": { "line": 124, "column": 23 } } }, "13": { "name": "encryptPassword", "line": 118, "loc": { "start": { "line": 135, "column": 19 }, "end": { "line": 135, "column": 38 } } } }, "statementMap": { "1": { "start": { "line": 3, "column": 0 }, "end": { "line": 3, "column": 35 } }, "2": { "start": { "line": 4, "column": 0 }, "end": { "line": 4, "column": 29 } }, "3": { "start": { "line": 5, "column": 0 }, "end": { "line": 5, "column": 31 } }, "4": { "start": { "line": 7, "column": 0 }, "end": { "line": 17, "column": 3 } }, "5": { "start": { "line": 22, "column": 0 }, "end": { "line": 31, "column": 5 } }, "6": { "start": { "line": 25, "column": 4 }, "end": { "line": 25, "column": 30 } }, "7": { "start": { "line": 26, "column": 4 }, "end": { "line": 26, "column": 32 } }, "8": { "start": { "line": 27, "column": 4 }, "end": { "line": 27, "column": 57 } }, "9": { "start": { "line": 30, "column": 4 }, "end": { "line": 30, "column": 26 } }, "10": { "start": { "line": 34, "column": 0 }, "end": { "line": 41, "column": 5 } }, "11": { "start": { "line": 37, "column": 4 }, "end": { "line": 40, "column": 6 } }, "12": { "start": { "line": 44, "column": 0 }, "end": { "line": 51, "column": 5 } }, "13": { "start": { "line": 47, "column": 4 }, "end": { "line": 50, "column": 6 } }, "14": { "start": { "line": 58, "column": 0 }, "end": { "line": 62, "column": 30 } }, "15": { "start": { "line": 61, "column": 4 }, "end": { "line": 61, "column": 24 } }, "16": { "start": { "line": 65, "column": 0 }, "end": { "line": 69, "column": 33 } }, "17": { "start": { "line": 68, "column": 4 }, "end": { "line": 68, "column": 33 } }, "18": { "start": { "line": 72, "column": 0 }, "end": { "line": 84, "column": 53 } }, "19": { "start": { "line": 75, "column": 4 }, "end": { "line": 75, "column": 20 } }, "20": { "start": { "line": 76, "column": 4 }, "end": { "line": 83, "column": 7 } }, "21": { "start": { "line": 77, "column": 6 }, "end": { "line": 77, "column": 24 } }, "22": { "start": { "line": 77, "column": 14 }, "end": { "line": 77, "column": 24 } }, "23": { "start": { "line": 78, "column": 6 }, "end": { "line": 81, "column": 7 } }, "24": { "start": { "line": 79, "column": 8 }, "end": { "line": 79, "column": 53 } }, "25": { "start": { "line": 79, "column": 32 }, "end": { "line": 79, "column": 53 } }, "26": { "start": { "line": 80, "column": 8 }, "end": { "line": 80, "column": 30 } }, "27": { "start": { "line": 82, "column": 6 }, "end": { "line": 82, "column": 20 } }, "28": { "start": { "line": 86, "column": 0 }, "end": { "line": 88, "column": 2 } }, "29": { "start": { "line": 87, "column": 2 }, "end": { "line": 87, "column": 31 } }, "30": { "start": { "line": 93, "column": 0 }, "end": { "line": 101, "column": 5 } }, "31": { "start": { "line": 95, "column": 4 }, "end": { "line": 95, "column": 35 } }, "32": { "start": { "line": 95, "column": 21 }, "end": { "line": 95, "column": 35 } }, "33": { "start": { "line": 97, "column": 4 }, "end": { "line": 100, "column": 13 } }, "34": { "start": { "line": 98, "column": 6 }, "end": { "line": 98, "column": 42 } }, "35": { "start": { "line": 100, "column": 6 }, "end": { "line": 100, "column": 13 } }, "36": { "start": { "line": 106, "column": 0 }, "end": { "line": 140, "column": 2 } }, "37": { "start": { "line": 115, "column": 4 }, "end": { "line": 115, "column": 67 } }, "38": { "start": { "line": 125, "column": 4 }, "end": { "line": 125, "column": 53 } }, "39": { "start": { "line": 136, "column": 4 }, "end": { "line": 136, "column": 43 } }, "40": { "start": { "line": 136, "column": 33 }, "end": { "line": 136, "column": 43 } }, "41": { "start": { "line": 137, "column": 4 }, "end": { "line": 137, "column": 47 } }, "42": { "start": { "line": 138, "column": 4 }, "end": { "line": 138, "column": 75 } }, "43": { "start": { "line": 142, "column": 0 }, "end": { "line": 142, "column": 52 } } }, "branchMap": { "1": { "line": 64, "type": "if", "locations": [{ "start": { "line": 77, "column": 6 }, "end": { "line": 77, "column": 6 } }, { "start": { "line": 77, "column": 6 }, "end": { "line": 77, "column": 6 } }] }, "2": { "line": 65, "type": "if", "locations": [{ "start": { "line": 78, "column": 6 }, "end": { "line": 78, "column": 6 } }, { "start": { "line": 78, "column": 6 }, "end": { "line": 78, "column": 6 } }] }, "3": { "line": 66, "type": "if", "locations": [{ "start": { "line": 79, "column": 8 }, "end": { "line": 79, "column": 8 } }, { "start": { "line": 79, "column": 8 }, "end": { "line": 79, "column": 8 } }] }, "4": { "line": 74, "type": "binary-expr", "locations": [{ "start": { "line": 87, "column": 9 }, "end": { "line": 87, "column": 14 } }, { "start": { "line": 87, "column": 18 }, "end": { "line": 87, "column": 30 } }] }, "5": { "line": 81, "type": "if", "locations": [{ "start": { "line": 95, "column": 4 }, "end": { "line": 95, "column": 4 } }, { "start": { "line": 95, "column": 4 }, "end": { "line": 95, "column": 4 } }] }, "6": { "line": 83, "type": "if", "locations": [{ "start": { "line": 97, "column": 4 }, "end": { "line": 97, "column": 4 } }, { "start": { "line": 97, "column": 4 }, "end": { "line": 97, "column": 4 } }] }, "7": { "line": 119, "type": "if", "locations": [{ "start": { "line": 136, "column": 4 }, "end": { "line": 136, "column": 4 } }, { "start": { "line": 136, "column": 4 }, "end": { "line": 136, "column": 4 } }] }, "8": { "line": 119, "type": "binary-expr", "locations": [{ "start": { "line": 136, "column": 8 }, "end": { "line": 136, "column": 17 } }, { "start": { "line": 136, "column": 21 }, "end": { "line": 136, "column": 31 } }] } }, "code": ["'use strict';", "", "var mongoose = require('mongoose');", "var Schema = mongoose.Schema;", "var crypto = require('crypto');", "", "var UserSchema = new Schema({", "  name: String,", "  email: { type: String, lowercase: true },", "  role: {", "    type: String,", "    default: 'user'", "  },", "  hashedPassword: String,", "  provider: String,", "  salt: String", "});", "", "/**", " * Virtuals", " */", "UserSchema", "  .virtual('password')", "  .set(function(password) {", "    this._password = password;", "    this.salt = this.makeSalt();", "    this.hashedPassword = this.encryptPassword(password);", "  })", "  .get(function() {", "    return this._password;", "  });", "", "// Public profile information", "UserSchema", "  .virtual('profile')", "  .get(function() {", "    return {", "      'name': this.name,", "      'role': this.role", "    };", "  });", "", "// Non-sensitive info we'll be putting in the token", "UserSchema", "  .virtual('token')", "  .get(function() {", "    return {", "      '_id': this._id,", "      'role': this.role", "    };", "  });", "", "/**", " * Validations", " */", "", "// Validate empty email", "UserSchema", "  .path('email')", "  .validate(function(email) {", "    return email.length;", "  }, 'Email cannot be blank');", "", "// Validate empty password", "UserSchema", "  .path('hashedPassword')", "  .validate(function(hashedPassword) {", "    return hashedPassword.length;", "  }, 'Password cannot be blank');", "", "// Validate email is not taken", "UserSchema", "  .path('email')", "  .validate(function(value, respond) {", "    var self = this;", "    this.constructor.findOne({email: value}, function(err, user) {", "      if(err) throw err;", "      if(user) {", "        if(self.id === user.id) return respond(true);", "        return respond(false);", "      }", "      respond(true);", "    });", "}, 'The specified email address is already in use.');", "", "var validatePresenceOf = function(value) {", "  return value && value.length;", "};", "", "/**", " * Pre-save hook", " */", "UserSchema", "  .pre('save', function(next) {", "    if (!this.isNew) return next();", "", "    if (!validatePresenceOf(this.hashedPassword))", "      next(new Error('Invalid password'));", "    else", "      next();", "  });", "", "/**", " * Methods", " */", "UserSchema.methods = {", "  /**", "   * Authenticate - check if the passwords are the same", "   *", "   * @param {String} plainText", "   * @return {Boolean}", "   * @api public", "   */", "  authenticate: function(plainText) {", "    return this.encryptPassword(plainText) === this.hashedPassword;", "  },", "", "  /**", "   * Make salt", "   *", "   * @return {String}", "   * @api public", "   */", "  makeSalt: function() {", "    return crypto.randomBytes(16).toString('base64');", "  },", "", "  /**", "   * Encrypt password", "   *", "   * @param {String} password", "   * @return {String}", "   * @api public", "   */", "  encryptPassword: function(password) {", "    if (!password || !this.salt) return '';", "    var salt = new Buffer(this.salt, 'base64');", "    return crypto.pbkdf2Sync(password, salt, 10000, 64).toString('base64');", "  }", "};", "", "module.exports = mongoose.model('User', UserSchema);", ""] };
	}
	__cov_IJMrbtA7oS2dLZSmrk15SQ = __cov_IJMrbtA7oS2dLZSmrk15SQ['/Users/mhiatt/Projects/pixelnuke/src/api/user/user.model.js'];
	__cov_IJMrbtA7oS2dLZSmrk15SQ.s['1']++;var mongoose = __webpack_require__(10);__cov_IJMrbtA7oS2dLZSmrk15SQ.s['2']++;var Schema = mongoose.Schema;__cov_IJMrbtA7oS2dLZSmrk15SQ.s['3']++;var crypto = __webpack_require__(17);__cov_IJMrbtA7oS2dLZSmrk15SQ.s['4']++;var UserSchema = new Schema({ name: String, email: { type: String, lowercase: true }, role: { type: String, 'default': 'user' }, hashedPassword: String, provider: String, salt: String });__cov_IJMrbtA7oS2dLZSmrk15SQ.s['5']++;UserSchema.virtual('password').set(function (password) {
	   __cov_IJMrbtA7oS2dLZSmrk15SQ.f['1']++;__cov_IJMrbtA7oS2dLZSmrk15SQ.s['6']++;this._password = password;__cov_IJMrbtA7oS2dLZSmrk15SQ.s['7']++;this.salt = this.makeSalt();__cov_IJMrbtA7oS2dLZSmrk15SQ.s['8']++;this.hashedPassword = this.encryptPassword(password);
	}).get(function () {
	   __cov_IJMrbtA7oS2dLZSmrk15SQ.f['2']++;__cov_IJMrbtA7oS2dLZSmrk15SQ.s['9']++;return this._password;
	});__cov_IJMrbtA7oS2dLZSmrk15SQ.s['10']++;UserSchema.virtual('profile').get(function () {
	   __cov_IJMrbtA7oS2dLZSmrk15SQ.f['3']++;__cov_IJMrbtA7oS2dLZSmrk15SQ.s['11']++;return { 'name': this.name, 'role': this.role };
	});__cov_IJMrbtA7oS2dLZSmrk15SQ.s['12']++;UserSchema.virtual('token').get(function () {
	   __cov_IJMrbtA7oS2dLZSmrk15SQ.f['4']++;__cov_IJMrbtA7oS2dLZSmrk15SQ.s['13']++;return { '_id': this._id, 'role': this.role };
	});__cov_IJMrbtA7oS2dLZSmrk15SQ.s['14']++;UserSchema.path('email').validate(function (email) {
	   __cov_IJMrbtA7oS2dLZSmrk15SQ.f['5']++;__cov_IJMrbtA7oS2dLZSmrk15SQ.s['15']++;return email.length;
	}, 'Email cannot be blank');__cov_IJMrbtA7oS2dLZSmrk15SQ.s['16']++;UserSchema.path('hashedPassword').validate(function (hashedPassword) {
	   __cov_IJMrbtA7oS2dLZSmrk15SQ.f['6']++;__cov_IJMrbtA7oS2dLZSmrk15SQ.s['17']++;return hashedPassword.length;
	}, 'Password cannot be blank');__cov_IJMrbtA7oS2dLZSmrk15SQ.s['18']++;UserSchema.path('email').validate(function (value, respond) {
	   __cov_IJMrbtA7oS2dLZSmrk15SQ.f['7']++;__cov_IJMrbtA7oS2dLZSmrk15SQ.s['19']++;var self = this;__cov_IJMrbtA7oS2dLZSmrk15SQ.s['20']++;this.constructor.findOne({ email: value }, function (err, user) {
	      __cov_IJMrbtA7oS2dLZSmrk15SQ.f['8']++;__cov_IJMrbtA7oS2dLZSmrk15SQ.s['21']++;if (err) {
	         __cov_IJMrbtA7oS2dLZSmrk15SQ.b['1'][0]++;__cov_IJMrbtA7oS2dLZSmrk15SQ.s['22']++;throw err;
	      } else {
	         __cov_IJMrbtA7oS2dLZSmrk15SQ.b['1'][1]++;
	      }__cov_IJMrbtA7oS2dLZSmrk15SQ.s['23']++;if (user) {
	         __cov_IJMrbtA7oS2dLZSmrk15SQ.b['2'][0]++;__cov_IJMrbtA7oS2dLZSmrk15SQ.s['24']++;if (self.id === user.id) {
	            __cov_IJMrbtA7oS2dLZSmrk15SQ.b['3'][0]++;__cov_IJMrbtA7oS2dLZSmrk15SQ.s['25']++;return respond(true);
	         } else {
	            __cov_IJMrbtA7oS2dLZSmrk15SQ.b['3'][1]++;
	         }__cov_IJMrbtA7oS2dLZSmrk15SQ.s['26']++;return respond(false);
	      } else {
	         __cov_IJMrbtA7oS2dLZSmrk15SQ.b['2'][1]++;
	      }__cov_IJMrbtA7oS2dLZSmrk15SQ.s['27']++;respond(true);
	   });
	}, 'The specified email address is already in use.');__cov_IJMrbtA7oS2dLZSmrk15SQ.s['28']++;var validatePresenceOf = function validatePresenceOf(value) {
	   __cov_IJMrbtA7oS2dLZSmrk15SQ.f['9']++;__cov_IJMrbtA7oS2dLZSmrk15SQ.s['29']++;return (__cov_IJMrbtA7oS2dLZSmrk15SQ.b['4'][0]++, value) && (__cov_IJMrbtA7oS2dLZSmrk15SQ.b['4'][1]++, value.length);
	};__cov_IJMrbtA7oS2dLZSmrk15SQ.s['30']++;UserSchema.pre('save', function (next) {
	   __cov_IJMrbtA7oS2dLZSmrk15SQ.f['10']++;__cov_IJMrbtA7oS2dLZSmrk15SQ.s['31']++;if (!this.isNew) {
	      __cov_IJMrbtA7oS2dLZSmrk15SQ.b['5'][0]++;__cov_IJMrbtA7oS2dLZSmrk15SQ.s['32']++;return next();
	   } else {
	      __cov_IJMrbtA7oS2dLZSmrk15SQ.b['5'][1]++;
	   }__cov_IJMrbtA7oS2dLZSmrk15SQ.s['33']++;if (!validatePresenceOf(this.hashedPassword)) {
	      __cov_IJMrbtA7oS2dLZSmrk15SQ.b['6'][0]++;__cov_IJMrbtA7oS2dLZSmrk15SQ.s['34']++;next(new Error('Invalid password'));
	   } else {
	      __cov_IJMrbtA7oS2dLZSmrk15SQ.b['6'][1]++;__cov_IJMrbtA7oS2dLZSmrk15SQ.s['35']++;next();
	   }
	});__cov_IJMrbtA7oS2dLZSmrk15SQ.s['36']++;UserSchema.methods = { authenticate: function authenticate(plainText) {
	      __cov_IJMrbtA7oS2dLZSmrk15SQ.f['11']++;__cov_IJMrbtA7oS2dLZSmrk15SQ.s['37']++;return this.encryptPassword(plainText) === this.hashedPassword;
	   }, makeSalt: function makeSalt() {
	      __cov_IJMrbtA7oS2dLZSmrk15SQ.f['12']++;__cov_IJMrbtA7oS2dLZSmrk15SQ.s['38']++;return crypto.randomBytes(16).toString('base64');
	   }, encryptPassword: function encryptPassword(password) {
	      __cov_IJMrbtA7oS2dLZSmrk15SQ.f['13']++;__cov_IJMrbtA7oS2dLZSmrk15SQ.s['39']++;if ((__cov_IJMrbtA7oS2dLZSmrk15SQ.b['8'][0]++, !password) || (__cov_IJMrbtA7oS2dLZSmrk15SQ.b['8'][1]++, !this.salt)) {
	         __cov_IJMrbtA7oS2dLZSmrk15SQ.b['7'][0]++;__cov_IJMrbtA7oS2dLZSmrk15SQ.s['40']++;return '';
	      } else {
	         __cov_IJMrbtA7oS2dLZSmrk15SQ.b['7'][1]++;
	      }__cov_IJMrbtA7oS2dLZSmrk15SQ.s['41']++;var salt = new Buffer(this.salt, 'base64');__cov_IJMrbtA7oS2dLZSmrk15SQ.s['42']++;return crypto.pbkdf2Sync(password, salt, 10000, 64).toString('base64');
	   } };__cov_IJMrbtA7oS2dLZSmrk15SQ.s['43']++;module.exports = mongoose.model('User', UserSchema);

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = require("crypto");

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __cov_YYdASCN3F31DUhhcG4GrTg = Function('return this')();
	if (!__cov_YYdASCN3F31DUhhcG4GrTg.__coverage__) {
	   __cov_YYdASCN3F31DUhhcG4GrTg.__coverage__ = {};
	}
	__cov_YYdASCN3F31DUhhcG4GrTg = __cov_YYdASCN3F31DUhhcG4GrTg.__coverage__;
	if (!__cov_YYdASCN3F31DUhhcG4GrTg['/Users/mhiatt/Projects/pixelnuke/src/api/thing/index.js']) {
	   __cov_YYdASCN3F31DUhhcG4GrTg['/Users/mhiatt/Projects/pixelnuke/src/api/thing/index.js'] = { "path": "/Users/mhiatt/Projects/pixelnuke/src/api/thing/index.js", "s": { "1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, "8": 0, "9": 0, "10": 0 }, "b": {}, "f": {}, "fnMap": {}, "statementMap": { "1": { "start": { "line": 3, "column": 0 }, "end": { "line": 3, "column": 33 } }, "2": { "start": { "line": 4, "column": 0 }, "end": { "line": 4, "column": 47 } }, "3": { "start": { "line": 6, "column": 0 }, "end": { "line": 6, "column": 30 } }, "4": { "start": { "line": 8, "column": 0 }, "end": { "line": 8, "column": 34 } }, "5": { "start": { "line": 9, "column": 0 }, "end": { "line": 9, "column": 36 } }, "6": { "start": { "line": 10, "column": 0 }, "end": { "line": 10, "column": 36 } }, "7": { "start": { "line": 11, "column": 0 }, "end": { "line": 11, "column": 38 } }, "8": { "start": { "line": 12, "column": 0 }, "end": { "line": 12, "column": 40 } }, "9": { "start": { "line": 13, "column": 0 }, "end": { "line": 13, "column": 42 } }, "10": { "start": { "line": 15, "column": 0 }, "end": { "line": 15, "column": 24 } } }, "branchMap": {}, "code": ["'use strict';", "", "var express = require('express');", "var controller = require('./thing.controller');", "", "var router = express.Router();", "", "router.get('/', controller.index);", "router.get('/:id', controller.show);", "router.post('/', controller.create);", "router.put('/:id', controller.update);", "router.patch('/:id', controller.update);", "router.delete('/:id', controller.destroy);", "", "module.exports = router;"] };
	}
	__cov_YYdASCN3F31DUhhcG4GrTg = __cov_YYdASCN3F31DUhhcG4GrTg['/Users/mhiatt/Projects/pixelnuke/src/api/thing/index.js'];
	__cov_YYdASCN3F31DUhhcG4GrTg.s['1']++;var express = __webpack_require__(1);__cov_YYdASCN3F31DUhhcG4GrTg.s['2']++;var controller = __webpack_require__(19);__cov_YYdASCN3F31DUhhcG4GrTg.s['3']++;var router = express.Router();__cov_YYdASCN3F31DUhhcG4GrTg.s['4']++;router.get('/', controller.index);__cov_YYdASCN3F31DUhhcG4GrTg.s['5']++;router.get('/:id', controller.show);__cov_YYdASCN3F31DUhhcG4GrTg.s['6']++;router.post('/', controller.create);__cov_YYdASCN3F31DUhhcG4GrTg.s['7']++;router.put('/:id', controller.update);__cov_YYdASCN3F31DUhhcG4GrTg.s['8']++;router.patch('/:id', controller.update);__cov_YYdASCN3F31DUhhcG4GrTg.s['9']++;router['delete']('/:id', controller.destroy);__cov_YYdASCN3F31DUhhcG4GrTg.s['10']++;module.exports = router;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __cov_NpgXV4oXu3uwkFA5sXW2LA = Function('return this')();
	if (!__cov_NpgXV4oXu3uwkFA5sXW2LA.__coverage__) {
	   __cov_NpgXV4oXu3uwkFA5sXW2LA.__coverage__ = {};
	}
	__cov_NpgXV4oXu3uwkFA5sXW2LA = __cov_NpgXV4oXu3uwkFA5sXW2LA.__coverage__;
	if (!__cov_NpgXV4oXu3uwkFA5sXW2LA['/Users/mhiatt/Projects/pixelnuke/src/api/thing/thing.controller.js']) {
	   __cov_NpgXV4oXu3uwkFA5sXW2LA['/Users/mhiatt/Projects/pixelnuke/src/api/thing/thing.controller.js'] = { "path": "/Users/mhiatt/Projects/pixelnuke/src/api/thing/thing.controller.js", "s": { "1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, "8": 0, "9": 0, "10": 0, "11": 0, "12": 0, "13": 0, "14": 0, "15": 0, "16": 0, "17": 0, "18": 0, "19": 0, "20": 0, "21": 0, "22": 0, "23": 0, "24": 0, "25": 0, "26": 0, "27": 0, "28": 0, "29": 0, "30": 0, "31": 0, "32": 0, "33": 0, "34": 0, "35": 0, "36": 0, "37": 0, "38": 0, "39": 0, "40": 0, "41": 0, "42": 0, "43": 1, "44": 0 }, "b": { "1": [0, 0], "2": [0, 0], "3": [0, 0], "4": [0, 0], "5": [0, 0], "6": [0, 0], "7": [0, 0], "8": [0, 0], "9": [0, 0], "10": [0, 0], "11": [0, 0] }, "f": { "1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, "8": 0, "9": 0, "10": 0, "11": 0, "12": 0, "13": 0 }, "fnMap": { "1": { "name": "(anonymous_1)", "line": 16, "loc": { "start": { "line": 16, "column": 16 }, "end": { "line": 16, "column": 35 } } }, "2": { "name": "(anonymous_2)", "line": 17, "loc": { "start": { "line": 17, "column": 13 }, "end": { "line": 17, "column": 36 } } }, "3": { "name": "(anonymous_3)", "line": 26, "loc": { "start": { "line": 24, "column": 15 }, "end": { "line": 24, "column": 34 } } }, "4": { "name": "(anonymous_4)", "line": 27, "loc": { "start": { "line": 25, "column": 32 }, "end": { "line": 25, "column": 54 } } }, "5": { "name": "(anonymous_5)", "line": 39, "loc": { "start": { "line": 33, "column": 17 }, "end": { "line": 33, "column": 36 } } }, "6": { "name": "(anonymous_6)", "line": 40, "loc": { "start": { "line": 34, "column": 25 }, "end": { "line": 34, "column": 46 } } }, "7": { "name": "(anonymous_7)", "line": 49, "loc": { "start": { "line": 41, "column": 17 }, "end": { "line": 41, "column": 36 } } }, "8": { "name": "(anonymous_8)", "line": 53, "loc": { "start": { "line": 43, "column": 32 }, "end": { "line": 43, "column": 54 } } }, "9": { "name": "(anonymous_9)", "line": 61, "loc": { "start": { "line": 47, "column": 17 }, "end": { "line": 47, "column": 32 } } }, "10": { "name": "(anonymous_10)", "line": 71, "loc": { "start": { "line": 55, "column": 18 }, "end": { "line": 55, "column": 37 } } }, "11": { "name": "(anonymous_11)", "line": 72, "loc": { "start": { "line": 56, "column": 32 }, "end": { "line": 56, "column": 54 } } }, "12": { "name": "(anonymous_12)", "line": 79, "loc": { "start": { "line": 59, "column": 17 }, "end": { "line": 59, "column": 31 } } }, "13": { "name": "handleError", "line": 88, "loc": { "start": { "line": 66, "column": 0 }, "end": { "line": 66, "column": 31 } } } }, "statementMap": { "1": { "start": { "line": 12, "column": 0 }, "end": { "line": 12, "column": 26 } }, "2": { "start": { "line": 13, "column": 0 }, "end": { "line": 13, "column": 37 } }, "3": { "start": { "line": 16, "column": 0 }, "end": { "line": 21, "column": 2 } }, "4": { "start": { "line": 17, "column": 2 }, "end": { "line": 20, "column": 5 } }, "5": { "start": { "line": 18, "column": 4 }, "end": { "line": 18, "column": 45 } }, "6": { "start": { "line": 18, "column": 14 }, "end": { "line": 18, "column": 43 } }, "7": { "start": { "line": 19, "column": 4 }, "end": { "line": 19, "column": 40 } }, "8": { "start": { "line": 24, "column": 0 }, "end": { "line": 30, "column": 2 } }, "9": { "start": { "line": 25, "column": 2 }, "end": { "line": 29, "column": 5 } }, "10": { "start": { "line": 26, "column": 4 }, "end": { "line": 26, "column": 45 } }, "11": { "start": { "line": 26, "column": 14 }, "end": { "line": 26, "column": 43 } }, "12": { "start": { "line": 27, "column": 4 }, "end": { "line": 27, "column": 60 } }, "13": { "start": { "line": 27, "column": 17 }, "end": { "line": 27, "column": 58 } }, "14": { "start": { "line": 28, "column": 4 }, "end": { "line": 28, "column": 27 } }, "15": { "start": { "line": 33, "column": 0 }, "end": { "line": 38, "column": 2 } }, "16": { "start": { "line": 34, "column": 2 }, "end": { "line": 37, "column": 5 } }, "17": { "start": { "line": 35, "column": 4 }, "end": { "line": 35, "column": 45 } }, "18": { "start": { "line": 35, "column": 14 }, "end": { "line": 35, "column": 43 } }, "19": { "start": { "line": 36, "column": 4 }, "end": { "line": 36, "column": 39 } }, "20": { "start": { "line": 41, "column": 0 }, "end": { "line": 52, "column": 2 } }, "21": { "start": { "line": 42, "column": 2 }, "end": { "line": 42, "column": 43 } }, "22": { "start": { "line": 42, "column": 21 }, "end": { "line": 42, "column": 41 } }, "23": { "start": { "line": 43, "column": 2 }, "end": { "line": 51, "column": 5 } }, "24": { "start": { "line": 44, "column": 4 }, "end": { "line": 44, "column": 46 } }, "25": { "start": { "line": 44, "column": 15 }, "end": { "line": 44, "column": 44 } }, "26": { "start": { "line": 45, "column": 4 }, "end": { "line": 45, "column": 60 } }, "27": { "start": { "line": 45, "column": 17 }, "end": { "line": 45, "column": 58 } }, "28": { "start": { "line": 46, "column": 4 }, "end": { "line": 46, "column": 43 } }, "29": { "start": { "line": 47, "column": 4 }, "end": { "line": 50, "column": 7 } }, "30": { "start": { "line": 48, "column": 6 }, "end": { "line": 48, "column": 48 } }, "31": { "start": { "line": 48, "column": 17 }, "end": { "line": 48, "column": 46 } }, "32": { "start": { "line": 49, "column": 6 }, "end": { "line": 49, "column": 41 } }, "33": { "start": { "line": 55, "column": 0 }, "end": { "line": 64, "column": 2 } }, "34": { "start": { "line": 56, "column": 2 }, "end": { "line": 63, "column": 5 } }, "35": { "start": { "line": 57, "column": 4 }, "end": { "line": 57, "column": 45 } }, "36": { "start": { "line": 57, "column": 14 }, "end": { "line": 57, "column": 43 } }, "37": { "start": { "line": 58, "column": 4 }, "end": { "line": 58, "column": 60 } }, "38": { "start": { "line": 58, "column": 17 }, "end": { "line": 58, "column": 58 } }, "39": { "start": { "line": 59, "column": 4 }, "end": { "line": 62, "column": 7 } }, "40": { "start": { "line": 60, "column": 6 }, "end": { "line": 60, "column": 47 } }, "41": { "start": { "line": 60, "column": 16 }, "end": { "line": 60, "column": 45 } }, "42": { "start": { "line": 61, "column": 6 }, "end": { "line": 61, "column": 48 } }, "43": { "start": { "line": 66, "column": 0 }, "end": { "line": 68, "column": 1 } }, "44": { "start": { "line": 67, "column": 2 }, "end": { "line": 67, "column": 35 } } }, "branchMap": { "1": { "line": 18, "type": "if", "locations": [{ "start": { "line": 18, "column": 4 }, "end": { "line": 18, "column": 4 } }, { "start": { "line": 18, "column": 4 }, "end": { "line": 18, "column": 4 } }] }, "2": { "line": 28, "type": "if", "locations": [{ "start": { "line": 26, "column": 4 }, "end": { "line": 26, "column": 4 } }, { "start": { "line": 26, "column": 4 }, "end": { "line": 26, "column": 4 } }] }, "3": { "line": 31, "type": "if", "locations": [{ "start": { "line": 27, "column": 4 }, "end": { "line": 27, "column": 4 } }, { "start": { "line": 27, "column": 4 }, "end": { "line": 27, "column": 4 } }] }, "4": { "line": 41, "type": "if", "locations": [{ "start": { "line": 35, "column": 4 }, "end": { "line": 35, "column": 4 } }, { "start": { "line": 35, "column": 4 }, "end": { "line": 35, "column": 4 } }] }, "5": { "line": 50, "type": "if", "locations": [{ "start": { "line": 42, "column": 2 }, "end": { "line": 42, "column": 2 } }, { "start": { "line": 42, "column": 2 }, "end": { "line": 42, "column": 2 } }] }, "6": { "line": 54, "type": "if", "locations": [{ "start": { "line": 44, "column": 4 }, "end": { "line": 44, "column": 4 } }, { "start": { "line": 44, "column": 4 }, "end": { "line": 44, "column": 4 } }] }, "7": { "line": 57, "type": "if", "locations": [{ "start": { "line": 45, "column": 4 }, "end": { "line": 45, "column": 4 } }, { "start": { "line": 45, "column": 4 }, "end": { "line": 45, "column": 4 } }] }, "8": { "line": 62, "type": "if", "locations": [{ "start": { "line": 48, "column": 6 }, "end": { "line": 48, "column": 6 } }, { "start": { "line": 48, "column": 6 }, "end": { "line": 48, "column": 6 } }] }, "9": { "line": 73, "type": "if", "locations": [{ "start": { "line": 57, "column": 4 }, "end": { "line": 57, "column": 4 } }, { "start": { "line": 57, "column": 4 }, "end": { "line": 57, "column": 4 } }] }, "10": { "line": 76, "type": "if", "locations": [{ "start": { "line": 58, "column": 4 }, "end": { "line": 58, "column": 4 } }, { "start": { "line": 58, "column": 4 }, "end": { "line": 58, "column": 4 } }] }, "11": { "line": 80, "type": "if", "locations": [{ "start": { "line": 60, "column": 6 }, "end": { "line": 60, "column": 6 } }, { "start": { "line": 60, "column": 6 }, "end": { "line": 60, "column": 6 } }] } }, "code": ["/**", " * Using Rails-like standard naming convention for endpoints.", " * GET     /things              ->  index", " * POST    /things              ->  create", " * GET     /things/:id          ->  show", " * PUT     /things/:id          ->  update", " * DELETE  /things/:id          ->  destroy", " */", "", "'use strict';", "", "var _ = require('lodash');", "var Thing = require('./thing.model');", "", "// Get list of things", "exports.index = function(req, res) {", "  Thing.find(function (err, things) {", "    if(err) { return handleError(res, err); }", "    return res.status(200).json(things);", "  });", "};", "", "// Get a single thing", "exports.show = function(req, res) {", "  Thing.findById(req.params.id, function (err, thing) {", "    if(err) { return handleError(res, err); }", "    if(!thing) { return res.status(404).send('Not Found'); }", "    return res.json(thing);", "  });", "};", "", "// Creates a new thing in the DB.", "exports.create = function(req, res) {", "  Thing.create(req.body, function(err, thing) {", "    if(err) { return handleError(res, err); }", "    return res.status(201).json(thing);", "  });", "};", "", "// Updates an existing thing in the DB.", "exports.update = function(req, res) {", "  if(req.body._id) { delete req.body._id; }", "  Thing.findById(req.params.id, function (err, thing) {", "    if (err) { return handleError(res, err); }", "    if(!thing) { return res.status(404).send('Not Found'); }", "    var updated = _.merge(thing, req.body);", "    updated.save(function (err) {", "      if (err) { return handleError(res, err); }", "      return res.status(200).json(thing);", "    });", "  });", "};", "", "// Deletes a thing from the DB.", "exports.destroy = function(req, res) {", "  Thing.findById(req.params.id, function (err, thing) {", "    if(err) { return handleError(res, err); }", "    if(!thing) { return res.status(404).send('Not Found'); }", "    thing.remove(function(err) {", "      if(err) { return handleError(res, err); }", "      return res.status(204).send('No Content');", "    });", "  });", "};", "", "function handleError(res, err) {", "  return res.status(500).send(err);", "}"] };
	}
	__cov_NpgXV4oXu3uwkFA5sXW2LA = __cov_NpgXV4oXu3uwkFA5sXW2LA['/Users/mhiatt/Projects/pixelnuke/src/api/thing/thing.controller.js'];
	__cov_NpgXV4oXu3uwkFA5sXW2LA.s['1']++;var _ = __webpack_require__(20);__cov_NpgXV4oXu3uwkFA5sXW2LA.s['2']++;var Thing = __webpack_require__(14);__cov_NpgXV4oXu3uwkFA5sXW2LA.s['3']++;exports.index = function (req, res) {
	   __cov_NpgXV4oXu3uwkFA5sXW2LA.f['1']++;__cov_NpgXV4oXu3uwkFA5sXW2LA.s['4']++;Thing.find(function (err, things) {
	      __cov_NpgXV4oXu3uwkFA5sXW2LA.f['2']++;__cov_NpgXV4oXu3uwkFA5sXW2LA.s['5']++;if (err) {
	         __cov_NpgXV4oXu3uwkFA5sXW2LA.b['1'][0]++;__cov_NpgXV4oXu3uwkFA5sXW2LA.s['6']++;return handleError(res, err);
	      } else {
	         __cov_NpgXV4oXu3uwkFA5sXW2LA.b['1'][1]++;
	      }__cov_NpgXV4oXu3uwkFA5sXW2LA.s['7']++;return res.status(200).json(things);
	   });
	};__cov_NpgXV4oXu3uwkFA5sXW2LA.s['8']++;exports.show = function (req, res) {
	   __cov_NpgXV4oXu3uwkFA5sXW2LA.f['3']++;__cov_NpgXV4oXu3uwkFA5sXW2LA.s['9']++;Thing.findById(req.params.id, function (err, thing) {
	      __cov_NpgXV4oXu3uwkFA5sXW2LA.f['4']++;__cov_NpgXV4oXu3uwkFA5sXW2LA.s['10']++;if (err) {
	         __cov_NpgXV4oXu3uwkFA5sXW2LA.b['2'][0]++;__cov_NpgXV4oXu3uwkFA5sXW2LA.s['11']++;return handleError(res, err);
	      } else {
	         __cov_NpgXV4oXu3uwkFA5sXW2LA.b['2'][1]++;
	      }__cov_NpgXV4oXu3uwkFA5sXW2LA.s['12']++;if (!thing) {
	         __cov_NpgXV4oXu3uwkFA5sXW2LA.b['3'][0]++;__cov_NpgXV4oXu3uwkFA5sXW2LA.s['13']++;return res.status(404).send('Not Found');
	      } else {
	         __cov_NpgXV4oXu3uwkFA5sXW2LA.b['3'][1]++;
	      }__cov_NpgXV4oXu3uwkFA5sXW2LA.s['14']++;return res.json(thing);
	   });
	};__cov_NpgXV4oXu3uwkFA5sXW2LA.s['15']++;exports.create = function (req, res) {
	   __cov_NpgXV4oXu3uwkFA5sXW2LA.f['5']++;__cov_NpgXV4oXu3uwkFA5sXW2LA.s['16']++;Thing.create(req.body, function (err, thing) {
	      __cov_NpgXV4oXu3uwkFA5sXW2LA.f['6']++;__cov_NpgXV4oXu3uwkFA5sXW2LA.s['17']++;if (err) {
	         __cov_NpgXV4oXu3uwkFA5sXW2LA.b['4'][0]++;__cov_NpgXV4oXu3uwkFA5sXW2LA.s['18']++;return handleError(res, err);
	      } else {
	         __cov_NpgXV4oXu3uwkFA5sXW2LA.b['4'][1]++;
	      }__cov_NpgXV4oXu3uwkFA5sXW2LA.s['19']++;return res.status(201).json(thing);
	   });
	};__cov_NpgXV4oXu3uwkFA5sXW2LA.s['20']++;exports.update = function (req, res) {
	   __cov_NpgXV4oXu3uwkFA5sXW2LA.f['7']++;__cov_NpgXV4oXu3uwkFA5sXW2LA.s['21']++;if (req.body._id) {
	      __cov_NpgXV4oXu3uwkFA5sXW2LA.b['5'][0]++;__cov_NpgXV4oXu3uwkFA5sXW2LA.s['22']++;delete req.body._id;
	   } else {
	      __cov_NpgXV4oXu3uwkFA5sXW2LA.b['5'][1]++;
	   }__cov_NpgXV4oXu3uwkFA5sXW2LA.s['23']++;Thing.findById(req.params.id, function (err, thing) {
	      __cov_NpgXV4oXu3uwkFA5sXW2LA.f['8']++;__cov_NpgXV4oXu3uwkFA5sXW2LA.s['24']++;if (err) {
	         __cov_NpgXV4oXu3uwkFA5sXW2LA.b['6'][0]++;__cov_NpgXV4oXu3uwkFA5sXW2LA.s['25']++;return handleError(res, err);
	      } else {
	         __cov_NpgXV4oXu3uwkFA5sXW2LA.b['6'][1]++;
	      }__cov_NpgXV4oXu3uwkFA5sXW2LA.s['26']++;if (!thing) {
	         __cov_NpgXV4oXu3uwkFA5sXW2LA.b['7'][0]++;__cov_NpgXV4oXu3uwkFA5sXW2LA.s['27']++;return res.status(404).send('Not Found');
	      } else {
	         __cov_NpgXV4oXu3uwkFA5sXW2LA.b['7'][1]++;
	      }__cov_NpgXV4oXu3uwkFA5sXW2LA.s['28']++;var updated = _.merge(thing, req.body);__cov_NpgXV4oXu3uwkFA5sXW2LA.s['29']++;updated.save(function (err) {
	         __cov_NpgXV4oXu3uwkFA5sXW2LA.f['9']++;__cov_NpgXV4oXu3uwkFA5sXW2LA.s['30']++;if (err) {
	            __cov_NpgXV4oXu3uwkFA5sXW2LA.b['8'][0]++;__cov_NpgXV4oXu3uwkFA5sXW2LA.s['31']++;return handleError(res, err);
	         } else {
	            __cov_NpgXV4oXu3uwkFA5sXW2LA.b['8'][1]++;
	         }__cov_NpgXV4oXu3uwkFA5sXW2LA.s['32']++;return res.status(200).json(thing);
	      });
	   });
	};__cov_NpgXV4oXu3uwkFA5sXW2LA.s['33']++;exports.destroy = function (req, res) {
	   __cov_NpgXV4oXu3uwkFA5sXW2LA.f['10']++;__cov_NpgXV4oXu3uwkFA5sXW2LA.s['34']++;Thing.findById(req.params.id, function (err, thing) {
	      __cov_NpgXV4oXu3uwkFA5sXW2LA.f['11']++;__cov_NpgXV4oXu3uwkFA5sXW2LA.s['35']++;if (err) {
	         __cov_NpgXV4oXu3uwkFA5sXW2LA.b['9'][0]++;__cov_NpgXV4oXu3uwkFA5sXW2LA.s['36']++;return handleError(res, err);
	      } else {
	         __cov_NpgXV4oXu3uwkFA5sXW2LA.b['9'][1]++;
	      }__cov_NpgXV4oXu3uwkFA5sXW2LA.s['37']++;if (!thing) {
	         __cov_NpgXV4oXu3uwkFA5sXW2LA.b['10'][0]++;__cov_NpgXV4oXu3uwkFA5sXW2LA.s['38']++;return res.status(404).send('Not Found');
	      } else {
	         __cov_NpgXV4oXu3uwkFA5sXW2LA.b['10'][1]++;
	      }__cov_NpgXV4oXu3uwkFA5sXW2LA.s['39']++;thing.remove(function (err) {
	         __cov_NpgXV4oXu3uwkFA5sXW2LA.f['12']++;__cov_NpgXV4oXu3uwkFA5sXW2LA.s['40']++;if (err) {
	            __cov_NpgXV4oXu3uwkFA5sXW2LA.b['11'][0]++;__cov_NpgXV4oXu3uwkFA5sXW2LA.s['41']++;return handleError(res, err);
	         } else {
	            __cov_NpgXV4oXu3uwkFA5sXW2LA.b['11'][1]++;
	         }__cov_NpgXV4oXu3uwkFA5sXW2LA.s['42']++;return res.status(204).send('No Content');
	      });
	   });
	};function handleError(res, err) {
	   __cov_NpgXV4oXu3uwkFA5sXW2LA.f['13']++;__cov_NpgXV4oXu3uwkFA5sXW2LA.s['44']++;return res.status(500).send(err);
	}

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = require("lodash");

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __cov_A8awCMvENYxq8BbiJcWHWA = Function('return this')();
	if (!__cov_A8awCMvENYxq8BbiJcWHWA.__coverage__) {
	   __cov_A8awCMvENYxq8BbiJcWHWA.__coverage__ = {};
	}
	__cov_A8awCMvENYxq8BbiJcWHWA = __cov_A8awCMvENYxq8BbiJcWHWA.__coverage__;
	if (!__cov_A8awCMvENYxq8BbiJcWHWA['/Users/mhiatt/Projects/pixelnuke/src/api/user/index.js']) {
	   __cov_A8awCMvENYxq8BbiJcWHWA['/Users/mhiatt/Projects/pixelnuke/src/api/user/index.js'] = { "path": "/Users/mhiatt/Projects/pixelnuke/src/api/user/index.js", "s": { "1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, "8": 0, "9": 0, "10": 0, "11": 0, "12": 0 }, "b": {}, "f": {}, "fnMap": {}, "statementMap": { "1": { "start": { "line": 3, "column": 0 }, "end": { "line": 3, "column": 33 } }, "2": { "start": { "line": 4, "column": 0 }, "end": { "line": 4, "column": 46 } }, "3": { "start": { "line": 5, "column": 0 }, "end": { "line": 5, "column": 31 } }, "4": { "start": { "line": 6, "column": 0 }, "end": { "line": 6, "column": 43 } }, "5": { "start": { "line": 8, "column": 0 }, "end": { "line": 8, "column": 30 } }, "6": { "start": { "line": 10, "column": 0 }, "end": { "line": 10, "column": 57 } }, "7": { "start": { "line": 11, "column": 0 }, "end": { "line": 11, "column": 65 } }, "8": { "start": { "line": 12, "column": 0 }, "end": { "line": 12, "column": 57 } }, "9": { "start": { "line": 13, "column": 0 }, "end": { "line": 13, "column": 79 } }, "10": { "start": { "line": 14, "column": 0 }, "end": { "line": 14, "column": 60 } }, "11": { "start": { "line": 15, "column": 0 }, "end": { "line": 15, "column": 36 } }, "12": { "start": { "line": 17, "column": 0 }, "end": { "line": 17, "column": 24 } } }, "branchMap": {}, "code": ["'use strict';", "", "var express = require('express');", "var controller = require('./user.controller');", "var config = require('config');", "var auth = require('../auth/auth.service');", "", "var router = express.Router();", "", "router.get('/', auth.hasRole('admin'), controller.index);", "router.delete('/:id', auth.hasRole('admin'), controller.destroy);", "router.get('/me', auth.isAuthenticated(), controller.me);", "router.put('/:id/password', auth.isAuthenticated(), controller.changePassword);", "router.get('/:id', auth.isAuthenticated(), controller.show);", "router.post('/', controller.create);", "", "module.exports = router;", ""] };
	}
	__cov_A8awCMvENYxq8BbiJcWHWA = __cov_A8awCMvENYxq8BbiJcWHWA['/Users/mhiatt/Projects/pixelnuke/src/api/user/index.js'];
	__cov_A8awCMvENYxq8BbiJcWHWA.s['1']++;var express = __webpack_require__(1);__cov_A8awCMvENYxq8BbiJcWHWA.s['2']++;var controller = __webpack_require__(22);__cov_A8awCMvENYxq8BbiJcWHWA.s['3']++;var config = __webpack_require__(8);__cov_A8awCMvENYxq8BbiJcWHWA.s['4']++;var auth = __webpack_require__(24);__cov_A8awCMvENYxq8BbiJcWHWA.s['5']++;var router = express.Router();__cov_A8awCMvENYxq8BbiJcWHWA.s['6']++;router.get('/', auth.hasRole('admin'), controller.index);__cov_A8awCMvENYxq8BbiJcWHWA.s['7']++;router['delete']('/:id', auth.hasRole('admin'), controller.destroy);__cov_A8awCMvENYxq8BbiJcWHWA.s['8']++;router.get('/me', auth.isAuthenticated(), controller.me);__cov_A8awCMvENYxq8BbiJcWHWA.s['9']++;router.put('/:id/password', auth.isAuthenticated(), controller.changePassword);__cov_A8awCMvENYxq8BbiJcWHWA.s['10']++;router.get('/:id', auth.isAuthenticated(), controller.show);__cov_A8awCMvENYxq8BbiJcWHWA.s['11']++;router.post('/', controller.create);__cov_A8awCMvENYxq8BbiJcWHWA.s['12']++;module.exports = router;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __cov_sfoWO8gqVVPj2TcB0jpJ2Q = Function('return this')();
	if (!__cov_sfoWO8gqVVPj2TcB0jpJ2Q.__coverage__) {
	   __cov_sfoWO8gqVVPj2TcB0jpJ2Q.__coverage__ = {};
	}
	__cov_sfoWO8gqVVPj2TcB0jpJ2Q = __cov_sfoWO8gqVVPj2TcB0jpJ2Q.__coverage__;
	if (!__cov_sfoWO8gqVVPj2TcB0jpJ2Q['/Users/mhiatt/Projects/pixelnuke/src/api/user/user.controller.js']) {
	   __cov_sfoWO8gqVVPj2TcB0jpJ2Q['/Users/mhiatt/Projects/pixelnuke/src/api/user/user.controller.js'] = { "path": "/Users/mhiatt/Projects/pixelnuke/src/api/user/user.controller.js", "s": { "1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, "8": 0, "9": 0, "10": 0, "11": 0, "12": 0, "13": 0, "14": 0, "15": 0, "16": 0, "17": 0, "18": 0, "19": 0, "20": 0, "21": 0, "22": 0, "23": 0, "24": 0, "25": 0, "26": 0, "27": 0, "28": 0, "29": 0, "30": 0, "31": 0, "32": 0, "33": 0, "34": 0, "35": 0, "36": 0, "37": 0, "38": 0, "39": 0, "40": 0, "41": 0, "42": 0, "43": 0, "44": 0, "45": 0, "46": 0, "47": 0, "48": 0, "49": 0, "50": 0, "51": 0, "52": 0, "53": 0, "54": 0, "55": 0 }, "b": { "1": [0, 0], "2": [0, 0], "3": [0, 0], "4": [0, 0], "5": [0, 0], "6": [0, 0], "7": [0, 0], "8": [0, 0], "9": [0, 0] }, "f": { "1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, "8": 0, "9": 0, "10": 0, "11": 0, "12": 0, "13": 0, "14": 0, "15": 0 }, "fnMap": { "1": { "name": "validationError", "line": 8, "loc": { "start": { "line": 8, "column": 22 }, "end": { "line": 8, "column": 41 } } }, "2": { "name": "(anonymous_2)", "line": 16, "loc": { "start": { "line": 16, "column": 16 }, "end": { "line": 16, "column": 35 } } }, "3": { "name": "(anonymous_3)", "line": 17, "loc": { "start": { "line": 17, "column": 41 }, "end": { "line": 17, "column": 63 } } }, "4": { "name": "(anonymous_4)", "line": 26, "loc": { "start": { "line": 26, "column": 17 }, "end": { "line": 26, "column": 43 } } }, "5": { "name": "(anonymous_5)", "line": 30, "loc": { "start": { "line": 30, "column": 15 }, "end": { "line": 30, "column": 35 } } }, "6": { "name": "(anonymous_6)", "line": 40, "loc": { "start": { "line": 40, "column": 15 }, "end": { "line": 40, "column": 41 } } }, "7": { "name": "(anonymous_7)", "line": 43, "loc": { "start": { "line": 43, "column": 24 }, "end": { "line": 43, "column": 45 } } }, "8": { "name": "(anonymous_8)", "line": 54, "loc": { "start": { "line": 54, "column": 18 }, "end": { "line": 54, "column": 37 } } }, "9": { "name": "(anonymous_9)", "line": 55, "loc": { "start": { "line": 55, "column": 40 }, "end": { "line": 55, "column": 60 } } }, "10": { "name": "(anonymous_10)", "line": 64, "loc": { "start": { "line": 64, "column": 25 }, "end": { "line": 64, "column": 50 } } }, "11": { "name": "(anonymous_11)", "line": 69, "loc": { "start": { "line": 69, "column": 24 }, "end": { "line": 69, "column": 45 } } }, "12": { "name": "(anonymous_12)", "line": 72, "loc": { "start": { "line": 72, "column": 16 }, "end": { "line": 72, "column": 30 } } }, "13": { "name": "(anonymous_13)", "line": 85, "loc": { "start": { "line": 85, "column": 13 }, "end": { "line": 85, "column": 38 } } }, "14": { "name": "(anonymous_14)", "line": 89, "loc": { "start": { "line": 89, "column": 30 }, "end": { "line": 89, "column": 50 } } }, "15": { "name": "(anonymous_15)", "line": 100, "loc": { "start": { "line": 99, "column": 23 }, "end": { "line": 99, "column": 48 } } } }, "statementMap": { "1": { "start": { "line": 3, "column": 0 }, "end": { "line": 3, "column": 35 } }, "2": { "start": { "line": 4, "column": 0 }, "end": { "line": 4, "column": 35 } }, "3": { "start": { "line": 5, "column": 0 }, "end": { "line": 5, "column": 31 } }, "4": { "start": { "line": 6, "column": 0 }, "end": { "line": 6, "column": 34 } }, "5": { "start": { "line": 8, "column": 0 }, "end": { "line": 10, "column": 2 } }, "6": { "start": { "line": 9, "column": 2 }, "end": { "line": 9, "column": 35 } }, "7": { "start": { "line": 16, "column": 0 }, "end": { "line": 21, "column": 2 } }, "8": { "start": { "line": 17, "column": 2 }, "end": { "line": 20, "column": 5 } }, "9": { "start": { "line": 18, "column": 4 }, "end": { "line": 18, "column": 45 } }, "10": { "start": { "line": 18, "column": 12 }, "end": { "line": 18, "column": 45 } }, "11": { "start": { "line": 19, "column": 4 }, "end": { "line": 19, "column": 32 } }, "12": { "start": { "line": 26, "column": 0 }, "end": { "line": 35, "column": 2 } }, "13": { "start": { "line": 27, "column": 2 }, "end": { "line": 27, "column": 35 } }, "14": { "start": { "line": 28, "column": 2 }, "end": { "line": 28, "column": 29 } }, "15": { "start": { "line": 29, "column": 2 }, "end": { "line": 29, "column": 24 } }, "16": { "start": { "line": 30, "column": 2 }, "end": { "line": 34, "column": 5 } }, "17": { "start": { "line": 31, "column": 4 }, "end": { "line": 31, "column": 46 } }, "18": { "start": { "line": 31, "column": 13 }, "end": { "line": 31, "column": 46 } }, "19": { "start": { "line": 32, "column": 4 }, "end": { "line": 32, "column": 95 } }, "20": { "start": { "line": 33, "column": 4 }, "end": { "line": 33, "column": 31 } }, "21": { "start": { "line": 40, "column": 0 }, "end": { "line": 48, "column": 2 } }, "22": { "start": { "line": 41, "column": 2 }, "end": { "line": 41, "column": 29 } }, "23": { "start": { "line": 43, "column": 2 }, "end": { "line": 47, "column": 5 } }, "24": { "start": { "line": 44, "column": 4 }, "end": { "line": 44, "column": 30 } }, "25": { "start": { "line": 44, "column": 13 }, "end": { "line": 44, "column": 30 } }, "26": { "start": { "line": 45, "column": 4 }, "end": { "line": 45, "column": 59 } }, "27": { "start": { "line": 45, "column": 15 }, "end": { "line": 45, "column": 59 } }, "28": { "start": { "line": 46, "column": 4 }, "end": { "line": 46, "column": 27 } }, "29": { "start": { "line": 54, "column": 0 }, "end": { "line": 59, "column": 2 } }, "30": { "start": { "line": 55, "column": 2 }, "end": { "line": 58, "column": 5 } }, "31": { "start": { "line": 56, "column": 4 }, "end": { "line": 56, "column": 45 } }, "32": { "start": { "line": 56, "column": 12 }, "end": { "line": 56, "column": 45 } }, "33": { "start": { "line": 57, "column": 4 }, "end": { "line": 57, "column": 46 } }, "34": { "start": { "line": 64, "column": 0 }, "end": { "line": 80, "column": 2 } }, "35": { "start": { "line": 65, "column": 2 }, "end": { "line": 65, "column": 28 } }, "36": { "start": { "line": 66, "column": 2 }, "end": { "line": 66, "column": 45 } }, "37": { "start": { "line": 67, "column": 2 }, "end": { "line": 67, "column": 45 } }, "38": { "start": { "line": 69, "column": 2 }, "end": { "line": 79, "column": 5 } }, "39": { "start": { "line": 70, "column": 4 }, "end": { "line": 78, "column": 5 } }, "40": { "start": { "line": 71, "column": 6 }, "end": { "line": 71, "column": 30 } }, "41": { "start": { "line": 72, "column": 6 }, "end": { "line": 75, "column": 9 } }, "42": { "start": { "line": 73, "column": 8 }, "end": { "line": 73, "column": 50 } }, "43": { "start": { "line": 73, "column": 17 }, "end": { "line": 73, "column": 50 } }, "44": { "start": { "line": 74, "column": 8 }, "end": { "line": 74, "column": 35 } }, "45": { "start": { "line": 77, "column": 6 }, "end": { "line": 77, "column": 40 } }, "46": { "start": { "line": 85, "column": 0 }, "end": { "line": 94, "column": 2 } }, "47": { "start": { "line": 86, "column": 2 }, "end": { "line": 86, "column": 28 } }, "48": { "start": { "line": 87, "column": 2 }, "end": { "line": 93, "column": 5 } }, "49": { "start": { "line": 90, "column": 4 }, "end": { "line": 90, "column": 30 } }, "50": { "start": { "line": 90, "column": 13 }, "end": { "line": 90, "column": 30 } }, "51": { "start": { "line": 91, "column": 4 }, "end": { "line": 91, "column": 59 } }, "52": { "start": { "line": 91, "column": 15 }, "end": { "line": 91, "column": 59 } }, "53": { "start": { "line": 92, "column": 4 }, "end": { "line": 92, "column": 19 } }, "54": { "start": { "line": 99, "column": 0 }, "end": { "line": 101, "column": 2 } }, "55": { "start": { "line": 100, "column": 2 }, "end": { "line": 100, "column": 20 } } }, "branchMap": { "1": { "line": 18, "type": "if", "locations": [{ "start": { "line": 18, "column": 4 }, "end": { "line": 18, "column": 4 } }, { "start": { "line": 18, "column": 4 }, "end": { "line": 18, "column": 4 } }] }, "2": { "line": 31, "type": "if", "locations": [{ "start": { "line": 31, "column": 4 }, "end": { "line": 31, "column": 4 } }, { "start": { "line": 31, "column": 4 }, "end": { "line": 31, "column": 4 } }] }, "3": { "line": 44, "type": "if", "locations": [{ "start": { "line": 44, "column": 4 }, "end": { "line": 44, "column": 4 } }, { "start": { "line": 44, "column": 4 }, "end": { "line": 44, "column": 4 } }] }, "4": { "line": 45, "type": "if", "locations": [{ "start": { "line": 45, "column": 4 }, "end": { "line": 45, "column": 4 } }, { "start": { "line": 45, "column": 4 }, "end": { "line": 45, "column": 4 } }] }, "5": { "line": 56, "type": "if", "locations": [{ "start": { "line": 56, "column": 4 }, "end": { "line": 56, "column": 4 } }, { "start": { "line": 56, "column": 4 }, "end": { "line": 56, "column": 4 } }] }, "6": { "line": 70, "type": "if", "locations": [{ "start": { "line": 70, "column": 4 }, "end": { "line": 70, "column": 4 } }, { "start": { "line": 70, "column": 4 }, "end": { "line": 70, "column": 4 } }] }, "7": { "line": 73, "type": "if", "locations": [{ "start": { "line": 73, "column": 8 }, "end": { "line": 73, "column": 8 } }, { "start": { "line": 73, "column": 8 }, "end": { "line": 73, "column": 8 } }] }, "8": { "line": 91, "type": "if", "locations": [{ "start": { "line": 90, "column": 4 }, "end": { "line": 90, "column": 4 } }, { "start": { "line": 90, "column": 4 }, "end": { "line": 90, "column": 4 } }] }, "9": { "line": 92, "type": "if", "locations": [{ "start": { "line": 91, "column": 4 }, "end": { "line": 91, "column": 4 } }, { "start": { "line": 91, "column": 4 }, "end": { "line": 91, "column": 4 } }] } }, "code": ["'use strict';", "", "var User = require('./user.model');", "var passport = require('passport');", "var config = require('config');", "var jwt = require('jsonwebtoken');", "", "var validationError = function(res, err) {", "  return res.status(422).json(err);", "};", "", "/**", " * Get list of users", " * restriction: 'admin'", " */", "exports.index = function(req, res) {", "  User.find({}, '-salt -hashedPassword', function (err, users) {", "    if(err) return res.status(500).send(err);", "    res.status(200).json(users);", "  });", "};", "", "/**", " * Creates a new user", " */", "exports.create = function (req, res, next) {", "  var newUser = new User(req.body);", "  newUser.provider = 'local';", "  newUser.role = 'user';", "  newUser.save(function(err, user) {", "    if (err) return validationError(res, err);", "    var token = jwt.sign({_id: user._id }, config.secrets.session, { expiresInMinutes: 60*5 });", "    res.json({ token: token });", "  });", "};", "", "/**", " * Get a single user", " */", "exports.show = function (req, res, next) {", "  var userId = req.params.id;", "", "  User.findById(userId, function (err, user) {", "    if (err) return next(err);", "    if (!user) return res.status(401).send('Unauthorized');", "    res.json(user.profile);", "  });", "};", "", "/**", " * Deletes a user", " * restriction: 'admin'", " */", "exports.destroy = function(req, res) {", "  User.findByIdAndRemove(req.params.id, function(err, user) {", "    if(err) return res.status(500).send(err);", "    return res.status(204).send('No Content');", "  });", "};", "", "/**", " * Change a users password", " */", "exports.changePassword = function(req, res, next) {", "  var userId = req.user._id;", "  var oldPass = String(req.body.oldPassword);", "  var newPass = String(req.body.newPassword);", "", "  User.findById(userId, function (err, user) {", "    if(user.authenticate(oldPass)) {", "      user.password = newPass;", "      user.save(function(err) {", "        if (err) return validationError(res, err);", "        res.status(200).send('OK');", "      });", "    } else {", "      res.status(403).send('Forbidden');", "    }", "  });", "};", "", "/**", " * Get my info", " */", "exports.me = function(req, res, next) {", "  var userId = req.user._id;", "  User.findOne({", "    _id: userId", "  }, '-salt -hashedPassword', function(err, user) { // don't ever give out the password or salt", "    if (err) return next(err);", "    if (!user) return res.status(401).send('Unauthorized');", "    res.json(user);", "  });", "};", "", "/**", " * Authentication callback", " */", "exports.authCallback = function(req, res, next) {", "  res.redirect('/');", "};", ""] };
	}
	__cov_sfoWO8gqVVPj2TcB0jpJ2Q = __cov_sfoWO8gqVVPj2TcB0jpJ2Q['/Users/mhiatt/Projects/pixelnuke/src/api/user/user.controller.js'];
	__cov_sfoWO8gqVVPj2TcB0jpJ2Q.s['1']++;var User = __webpack_require__(16);__cov_sfoWO8gqVVPj2TcB0jpJ2Q.s['2']++;var passport = __webpack_require__(9);__cov_sfoWO8gqVVPj2TcB0jpJ2Q.s['3']++;var config = __webpack_require__(8);__cov_sfoWO8gqVVPj2TcB0jpJ2Q.s['4']++;var jwt = __webpack_require__(23);__cov_sfoWO8gqVVPj2TcB0jpJ2Q.s['5']++;var validationError = function validationError(res, err) {
	   __cov_sfoWO8gqVVPj2TcB0jpJ2Q.f['1']++;__cov_sfoWO8gqVVPj2TcB0jpJ2Q.s['6']++;return res.status(422).json(err);
	};__cov_sfoWO8gqVVPj2TcB0jpJ2Q.s['7']++;exports.index = function (req, res) {
	   __cov_sfoWO8gqVVPj2TcB0jpJ2Q.f['2']++;__cov_sfoWO8gqVVPj2TcB0jpJ2Q.s['8']++;User.find({}, '-salt -hashedPassword', function (err, users) {
	      __cov_sfoWO8gqVVPj2TcB0jpJ2Q.f['3']++;__cov_sfoWO8gqVVPj2TcB0jpJ2Q.s['9']++;if (err) {
	         __cov_sfoWO8gqVVPj2TcB0jpJ2Q.b['1'][0]++;__cov_sfoWO8gqVVPj2TcB0jpJ2Q.s['10']++;return res.status(500).send(err);
	      } else {
	         __cov_sfoWO8gqVVPj2TcB0jpJ2Q.b['1'][1]++;
	      }__cov_sfoWO8gqVVPj2TcB0jpJ2Q.s['11']++;res.status(200).json(users);
	   });
	};__cov_sfoWO8gqVVPj2TcB0jpJ2Q.s['12']++;exports.create = function (req, res, next) {
	   __cov_sfoWO8gqVVPj2TcB0jpJ2Q.f['4']++;__cov_sfoWO8gqVVPj2TcB0jpJ2Q.s['13']++;var newUser = new User(req.body);__cov_sfoWO8gqVVPj2TcB0jpJ2Q.s['14']++;newUser.provider = 'local';__cov_sfoWO8gqVVPj2TcB0jpJ2Q.s['15']++;newUser.role = 'user';__cov_sfoWO8gqVVPj2TcB0jpJ2Q.s['16']++;newUser.save(function (err, user) {
	      __cov_sfoWO8gqVVPj2TcB0jpJ2Q.f['5']++;__cov_sfoWO8gqVVPj2TcB0jpJ2Q.s['17']++;if (err) {
	         __cov_sfoWO8gqVVPj2TcB0jpJ2Q.b['2'][0]++;__cov_sfoWO8gqVVPj2TcB0jpJ2Q.s['18']++;return validationError(res, err);
	      } else {
	         __cov_sfoWO8gqVVPj2TcB0jpJ2Q.b['2'][1]++;
	      }__cov_sfoWO8gqVVPj2TcB0jpJ2Q.s['19']++;var token = jwt.sign({ _id: user._id }, config.secrets.session, { expiresInMinutes: 60 * 5 });__cov_sfoWO8gqVVPj2TcB0jpJ2Q.s['20']++;res.json({ token: token });
	   });
	};__cov_sfoWO8gqVVPj2TcB0jpJ2Q.s['21']++;exports.show = function (req, res, next) {
	   __cov_sfoWO8gqVVPj2TcB0jpJ2Q.f['6']++;__cov_sfoWO8gqVVPj2TcB0jpJ2Q.s['22']++;var userId = req.params.id;__cov_sfoWO8gqVVPj2TcB0jpJ2Q.s['23']++;User.findById(userId, function (err, user) {
	      __cov_sfoWO8gqVVPj2TcB0jpJ2Q.f['7']++;__cov_sfoWO8gqVVPj2TcB0jpJ2Q.s['24']++;if (err) {
	         __cov_sfoWO8gqVVPj2TcB0jpJ2Q.b['3'][0]++;__cov_sfoWO8gqVVPj2TcB0jpJ2Q.s['25']++;return next(err);
	      } else {
	         __cov_sfoWO8gqVVPj2TcB0jpJ2Q.b['3'][1]++;
	      }__cov_sfoWO8gqVVPj2TcB0jpJ2Q.s['26']++;if (!user) {
	         __cov_sfoWO8gqVVPj2TcB0jpJ2Q.b['4'][0]++;__cov_sfoWO8gqVVPj2TcB0jpJ2Q.s['27']++;return res.status(401).send('Unauthorized');
	      } else {
	         __cov_sfoWO8gqVVPj2TcB0jpJ2Q.b['4'][1]++;
	      }__cov_sfoWO8gqVVPj2TcB0jpJ2Q.s['28']++;res.json(user.profile);
	   });
	};__cov_sfoWO8gqVVPj2TcB0jpJ2Q.s['29']++;exports.destroy = function (req, res) {
	   __cov_sfoWO8gqVVPj2TcB0jpJ2Q.f['8']++;__cov_sfoWO8gqVVPj2TcB0jpJ2Q.s['30']++;User.findByIdAndRemove(req.params.id, function (err, user) {
	      __cov_sfoWO8gqVVPj2TcB0jpJ2Q.f['9']++;__cov_sfoWO8gqVVPj2TcB0jpJ2Q.s['31']++;if (err) {
	         __cov_sfoWO8gqVVPj2TcB0jpJ2Q.b['5'][0]++;__cov_sfoWO8gqVVPj2TcB0jpJ2Q.s['32']++;return res.status(500).send(err);
	      } else {
	         __cov_sfoWO8gqVVPj2TcB0jpJ2Q.b['5'][1]++;
	      }__cov_sfoWO8gqVVPj2TcB0jpJ2Q.s['33']++;return res.status(204).send('No Content');
	   });
	};__cov_sfoWO8gqVVPj2TcB0jpJ2Q.s['34']++;exports.changePassword = function (req, res, next) {
	   __cov_sfoWO8gqVVPj2TcB0jpJ2Q.f['10']++;__cov_sfoWO8gqVVPj2TcB0jpJ2Q.s['35']++;var userId = req.user._id;__cov_sfoWO8gqVVPj2TcB0jpJ2Q.s['36']++;var oldPass = String(req.body.oldPassword);__cov_sfoWO8gqVVPj2TcB0jpJ2Q.s['37']++;var newPass = String(req.body.newPassword);__cov_sfoWO8gqVVPj2TcB0jpJ2Q.s['38']++;User.findById(userId, function (err, user) {
	      __cov_sfoWO8gqVVPj2TcB0jpJ2Q.f['11']++;__cov_sfoWO8gqVVPj2TcB0jpJ2Q.s['39']++;if (user.authenticate(oldPass)) {
	         __cov_sfoWO8gqVVPj2TcB0jpJ2Q.b['6'][0]++;__cov_sfoWO8gqVVPj2TcB0jpJ2Q.s['40']++;user.password = newPass;__cov_sfoWO8gqVVPj2TcB0jpJ2Q.s['41']++;user.save(function (err) {
	            __cov_sfoWO8gqVVPj2TcB0jpJ2Q.f['12']++;__cov_sfoWO8gqVVPj2TcB0jpJ2Q.s['42']++;if (err) {
	               __cov_sfoWO8gqVVPj2TcB0jpJ2Q.b['7'][0]++;__cov_sfoWO8gqVVPj2TcB0jpJ2Q.s['43']++;return validationError(res, err);
	            } else {
	               __cov_sfoWO8gqVVPj2TcB0jpJ2Q.b['7'][1]++;
	            }__cov_sfoWO8gqVVPj2TcB0jpJ2Q.s['44']++;res.status(200).send('OK');
	         });
	      } else {
	         __cov_sfoWO8gqVVPj2TcB0jpJ2Q.b['6'][1]++;__cov_sfoWO8gqVVPj2TcB0jpJ2Q.s['45']++;res.status(403).send('Forbidden');
	      }
	   });
	};__cov_sfoWO8gqVVPj2TcB0jpJ2Q.s['46']++;exports.me = function (req, res, next) {
	   __cov_sfoWO8gqVVPj2TcB0jpJ2Q.f['13']++;__cov_sfoWO8gqVVPj2TcB0jpJ2Q.s['47']++;var userId = req.user._id;__cov_sfoWO8gqVVPj2TcB0jpJ2Q.s['48']++;User.findOne({ _id: userId }, '-salt -hashedPassword', function (err, user) {
	      __cov_sfoWO8gqVVPj2TcB0jpJ2Q.f['14']++;__cov_sfoWO8gqVVPj2TcB0jpJ2Q.s['49']++;if (err) {
	         __cov_sfoWO8gqVVPj2TcB0jpJ2Q.b['8'][0]++;__cov_sfoWO8gqVVPj2TcB0jpJ2Q.s['50']++;return next(err);
	      } else {
	         __cov_sfoWO8gqVVPj2TcB0jpJ2Q.b['8'][1]++;
	      }__cov_sfoWO8gqVVPj2TcB0jpJ2Q.s['51']++;if (!user) {
	         __cov_sfoWO8gqVVPj2TcB0jpJ2Q.b['9'][0]++;__cov_sfoWO8gqVVPj2TcB0jpJ2Q.s['52']++;return res.status(401).send('Unauthorized');
	      } else {
	         __cov_sfoWO8gqVVPj2TcB0jpJ2Q.b['9'][1]++;
	      }__cov_sfoWO8gqVVPj2TcB0jpJ2Q.s['53']++;res.json(user);
	   });
	};__cov_sfoWO8gqVVPj2TcB0jpJ2Q.s['54']++;exports.authCallback = function (req, res, next) {
	   __cov_sfoWO8gqVVPj2TcB0jpJ2Q.f['15']++;__cov_sfoWO8gqVVPj2TcB0jpJ2Q.s['55']++;res.redirect('/');
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = require("jsonwebtoken");

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __cov_O5uokFDHSI4LgB2NSYKohA = Function('return this')();
	if (!__cov_O5uokFDHSI4LgB2NSYKohA.__coverage__) {
	   __cov_O5uokFDHSI4LgB2NSYKohA.__coverage__ = {};
	}
	__cov_O5uokFDHSI4LgB2NSYKohA = __cov_O5uokFDHSI4LgB2NSYKohA.__coverage__;
	if (!__cov_O5uokFDHSI4LgB2NSYKohA['/Users/mhiatt/Projects/pixelnuke/src/api/auth/auth.service.js']) {
	   __cov_O5uokFDHSI4LgB2NSYKohA['/Users/mhiatt/Projects/pixelnuke/src/api/auth/auth.service.js'] = { "path": "/Users/mhiatt/Projects/pixelnuke/src/api/auth/auth.service.js", "s": { "1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, "8": 0, "9": 1, "10": 0, "11": 0, "12": 0, "13": 0, "14": 0, "15": 0, "16": 0, "17": 0, "18": 0, "19": 0, "20": 0, "21": 1, "22": 0, "23": 0, "24": 0, "25": 0, "26": 0, "27": 0, "28": 1, "29": 0, "30": 1, "31": 0, "32": 0, "33": 0, "34": 0, "35": 0, "36": 0, "37": 0, "38": 0, "39": 0 }, "b": { "1": [0, 0], "2": [0, 0], "3": [0, 0], "4": [0, 0], "5": [0, 0], "6": [0, 0], "7": [0, 0] }, "f": { "1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, "8": 0 }, "fnMap": { "1": { "name": "isAuthenticated", "line": 16, "loc": { "start": { "line": 16, "column": 0 }, "end": { "line": 16, "column": 27 } } }, "2": { "name": "(anonymous_2)", "line": 19, "loc": { "start": { "line": 19, "column": 9 }, "end": { "line": 19, "column": 34 } } }, "3": { "name": "(anonymous_3)", "line": 27, "loc": { "start": { "line": 27, "column": 9 }, "end": { "line": 27, "column": 34 } } }, "4": { "name": "(anonymous_4)", "line": 28, "loc": { "start": { "line": 28, "column": 34 }, "end": { "line": 28, "column": 55 } } }, "5": { "name": "hasRole", "line": 41, "loc": { "start": { "line": 41, "column": 0 }, "end": { "line": 41, "column": 31 } } }, "6": { "name": "meetsRequirements", "line": 44, "loc": { "start": { "line": 46, "column": 9 }, "end": { "line": 46, "column": 52 } } }, "7": { "name": "signToken", "line": 56, "loc": { "start": { "line": 59, "column": 0 }, "end": { "line": 59, "column": 23 } } }, "8": { "name": "setTokenCookie", "line": 63, "loc": { "start": { "line": 66, "column": 0 }, "end": { "line": 66, "column": 34 } } } }, "statementMap": { "1": { "start": { "line": 3, "column": 0 }, "end": { "line": 3, "column": 35 } }, "2": { "start": { "line": 4, "column": 0 }, "end": { "line": 4, "column": 35 } }, "3": { "start": { "line": 5, "column": 0 }, "end": { "line": 5, "column": 31 } }, "4": { "start": { "line": 6, "column": 0 }, "end": { "line": 6, "column": 34 } }, "5": { "start": { "line": 7, "column": 0 }, "end": { "line": 7, "column": 40 } }, "6": { "start": { "line": 8, "column": 0 }, "end": { "line": 8, "column": 47 } }, "7": { "start": { "line": 9, "column": 0 }, "end": { "line": 9, "column": 41 } }, "8": { "start": { "line": 10, "column": 0 }, "end": { "line": 10, "column": 65 } }, "9": { "start": { "line": 16, "column": 0 }, "end": { "line": 36, "column": 1 } }, "10": { "start": { "line": 17, "column": 2 }, "end": { "line": 35, "column": 7 } }, "11": { "start": { "line": 21, "column": 6 }, "end": { "line": 23, "column": 7 } }, "12": { "start": { "line": 22, "column": 8 }, "end": { "line": 22, "column": 71 } }, "13": { "start": { "line": 24, "column": 6 }, "end": { "line": 24, "column": 34 } }, "14": { "start": { "line": 28, "column": 6 }, "end": { "line": 34, "column": 9 } }, "15": { "start": { "line": 29, "column": 8 }, "end": { "line": 29, "column": 34 } }, "16": { "start": { "line": 29, "column": 17 }, "end": { "line": 29, "column": 34 } }, "17": { "start": { "line": 30, "column": 8 }, "end": { "line": 30, "column": 63 } }, "18": { "start": { "line": 30, "column": 19 }, "end": { "line": 30, "column": 63 } }, "19": { "start": { "line": 32, "column": 8 }, "end": { "line": 32, "column": 24 } }, "20": { "start": { "line": 33, "column": 8 }, "end": { "line": 33, "column": 15 } }, "21": { "start": { "line": 41, "column": 0 }, "end": { "line": 54, "column": 1 } }, "22": { "start": { "line": 42, "column": 2 }, "end": { "line": 42, "column": 70 } }, "23": { "start": { "line": 42, "column": 21 }, "end": { "line": 42, "column": 70 } }, "24": { "start": { "line": 44, "column": 2 }, "end": { "line": 53, "column": 7 } }, "25": { "start": { "line": 47, "column": 6 }, "end": { "line": 52, "column": 7 } }, "26": { "start": { "line": 48, "column": 8 }, "end": { "line": 48, "column": 15 } }, "27": { "start": { "line": 51, "column": 8 }, "end": { "line": 51, "column": 42 } }, "28": { "start": { "line": 59, "column": 0 }, "end": { "line": 61, "column": 1 } }, "29": { "start": { "line": 60, "column": 2 }, "end": { "line": 60, "column": 83 } }, "30": { "start": { "line": 66, "column": 0 }, "end": { "line": 71, "column": 1 } }, "31": { "start": { "line": 67, "column": 2 }, "end": { "line": 67, "column": 100 } }, "32": { "start": { "line": 67, "column": 17 }, "end": { "line": 67, "column": 100 } }, "33": { "start": { "line": 68, "column": 2 }, "end": { "line": 68, "column": 53 } }, "34": { "start": { "line": 69, "column": 2 }, "end": { "line": 69, "column": 45 } }, "35": { "start": { "line": 70, "column": 2 }, "end": { "line": 70, "column": 20 } }, "36": { "start": { "line": 73, "column": 0 }, "end": { "line": 73, "column": 42 } }, "37": { "start": { "line": 74, "column": 0 }, "end": { "line": 74, "column": 26 } }, "38": { "start": { "line": 75, "column": 0 }, "end": { "line": 75, "column": 30 } }, "39": { "start": { "line": 76, "column": 0 }, "end": { "line": 76, "column": 40 } } }, "branchMap": { "1": { "line": 21, "type": "if", "locations": [{ "start": { "line": 21, "column": 6 }, "end": { "line": 21, "column": 6 } }, { "start": { "line": 21, "column": 6 }, "end": { "line": 21, "column": 6 } }] }, "2": { "line": 21, "type": "binary-expr", "locations": [{ "start": { "line": 21, "column": 9 }, "end": { "line": 21, "column": 18 } }, { "start": { "line": 21, "column": 22 }, "end": { "line": 21, "column": 62 } }] }, "3": { "line": 29, "type": "if", "locations": [{ "start": { "line": 29, "column": 8 }, "end": { "line": 29, "column": 8 } }, { "start": { "line": 29, "column": 8 }, "end": { "line": 29, "column": 8 } }] }, "4": { "line": 30, "type": "if", "locations": [{ "start": { "line": 30, "column": 8 }, "end": { "line": 30, "column": 8 } }, { "start": { "line": 30, "column": 8 }, "end": { "line": 30, "column": 8 } }] }, "5": { "line": 42, "type": "if", "locations": [{ "start": { "line": 42, "column": 2 }, "end": { "line": 42, "column": 2 } }, { "start": { "line": 42, "column": 2 }, "end": { "line": 42, "column": 2 } }] }, "6": { "line": 45, "type": "if", "locations": [{ "start": { "line": 47, "column": 6 }, "end": { "line": 47, "column": 6 } }, { "start": { "line": 47, "column": 6 }, "end": { "line": 47, "column": 6 } }] }, "7": { "line": 64, "type": "if", "locations": [{ "start": { "line": 67, "column": 2 }, "end": { "line": 67, "column": 2 } }, { "start": { "line": 67, "column": 2 }, "end": { "line": 67, "column": 2 } }] } }, "code": ["'use strict';", "", "var mongoose = require('mongoose');", "var passport = require('passport');", "var config = require('config');", "var jwt = require('jsonwebtoken');", "var expressJwt = require('express-jwt');", "var compose = require('composable-middleware');", "var User = require('../user/user.model');", "var validateJwt = expressJwt({ secret: config.secrets.session });", "", "/**", " * Attaches the user object to the request if authenticated", " * Otherwise returns 403", " */", "function isAuthenticated() {", "  return compose()", "    // Validate jwt", "    .use(function(req, res, next) {", "      // allow access_token to be passed through query parameter as well", "      if(req.query && req.query.hasOwnProperty('access_token')) {", "        req.headers.authorization = 'Bearer ' + req.query.access_token;", "      }", "      validateJwt(req, res, next);", "    })", "    // Attach user to request", "    .use(function(req, res, next) {", "      User.findById(req.user._id, function (err, user) {", "        if (err) return next(err);", "        if (!user) return res.status(401).send('Unauthorized');", "", "        req.user = user;", "        next();", "      });", "    });", "}", "", "/**", " * Checks if the user role meets the minimum requirements of the route", " */", "function hasRole(roleRequired) {", "  if (!roleRequired) throw new Error('Required role needs to be set');", "", "  return compose()", "    .use(isAuthenticated())", "    .use(function meetsRequirements(req, res, next) {", "      if (config.userRoles.indexOf(req.user.role) >= config.userRoles.indexOf(roleRequired)) {", "        next();", "      }", "      else {", "        res.status(403).send('Forbidden');", "      }", "    });", "}", "", "/**", " * Returns a jwt token signed by the app secret", " */", "function signToken(id) {", "  return jwt.sign({ _id: id }, config.secrets.session, { expiresInMinutes: 60*5 });", "}", "", "/**", " * Set token cookie directly for oAuth strategies", " */", "function setTokenCookie(req, res) {", "  if (!req.user) return res.status(404).json({ message: 'Something went wrong, please try again.'});", "  var token = signToken(req.user._id, req.user.role);", "  res.cookie('token', JSON.stringify(token));", "  res.redirect('/');", "}", "", "exports.isAuthenticated = isAuthenticated;", "exports.hasRole = hasRole;", "exports.signToken = signToken;", "exports.setTokenCookie = setTokenCookie;", ""] };
	}
	__cov_O5uokFDHSI4LgB2NSYKohA = __cov_O5uokFDHSI4LgB2NSYKohA['/Users/mhiatt/Projects/pixelnuke/src/api/auth/auth.service.js'];
	__cov_O5uokFDHSI4LgB2NSYKohA.s['1']++;var mongoose = __webpack_require__(10);__cov_O5uokFDHSI4LgB2NSYKohA.s['2']++;var passport = __webpack_require__(9);__cov_O5uokFDHSI4LgB2NSYKohA.s['3']++;var config = __webpack_require__(8);__cov_O5uokFDHSI4LgB2NSYKohA.s['4']++;var jwt = __webpack_require__(23);__cov_O5uokFDHSI4LgB2NSYKohA.s['5']++;var expressJwt = __webpack_require__(25);__cov_O5uokFDHSI4LgB2NSYKohA.s['6']++;var compose = __webpack_require__(26);__cov_O5uokFDHSI4LgB2NSYKohA.s['7']++;var User = __webpack_require__(16);__cov_O5uokFDHSI4LgB2NSYKohA.s['8']++;var validateJwt = expressJwt({ secret: config.secrets.session });function isAuthenticated() {
	   __cov_O5uokFDHSI4LgB2NSYKohA.f['1']++;__cov_O5uokFDHSI4LgB2NSYKohA.s['10']++;return compose().use(function (req, res, next) {
	      __cov_O5uokFDHSI4LgB2NSYKohA.f['2']++;__cov_O5uokFDHSI4LgB2NSYKohA.s['11']++;if ((__cov_O5uokFDHSI4LgB2NSYKohA.b['2'][0]++, req.query) && (__cov_O5uokFDHSI4LgB2NSYKohA.b['2'][1]++, req.query.hasOwnProperty('access_token'))) {
	         __cov_O5uokFDHSI4LgB2NSYKohA.b['1'][0]++;__cov_O5uokFDHSI4LgB2NSYKohA.s['12']++;req.headers.authorization = 'Bearer ' + req.query.access_token;
	      } else {
	         __cov_O5uokFDHSI4LgB2NSYKohA.b['1'][1]++;
	      }__cov_O5uokFDHSI4LgB2NSYKohA.s['13']++;validateJwt(req, res, next);
	   }).use(function (req, res, next) {
	      __cov_O5uokFDHSI4LgB2NSYKohA.f['3']++;__cov_O5uokFDHSI4LgB2NSYKohA.s['14']++;User.findById(req.user._id, function (err, user) {
	         __cov_O5uokFDHSI4LgB2NSYKohA.f['4']++;__cov_O5uokFDHSI4LgB2NSYKohA.s['15']++;if (err) {
	            __cov_O5uokFDHSI4LgB2NSYKohA.b['3'][0]++;__cov_O5uokFDHSI4LgB2NSYKohA.s['16']++;return next(err);
	         } else {
	            __cov_O5uokFDHSI4LgB2NSYKohA.b['3'][1]++;
	         }__cov_O5uokFDHSI4LgB2NSYKohA.s['17']++;if (!user) {
	            __cov_O5uokFDHSI4LgB2NSYKohA.b['4'][0]++;__cov_O5uokFDHSI4LgB2NSYKohA.s['18']++;return res.status(401).send('Unauthorized');
	         } else {
	            __cov_O5uokFDHSI4LgB2NSYKohA.b['4'][1]++;
	         }__cov_O5uokFDHSI4LgB2NSYKohA.s['19']++;req.user = user;__cov_O5uokFDHSI4LgB2NSYKohA.s['20']++;next();
	      });
	   });
	}function hasRole(roleRequired) {
	   __cov_O5uokFDHSI4LgB2NSYKohA.f['5']++;__cov_O5uokFDHSI4LgB2NSYKohA.s['22']++;if (!roleRequired) {
	      __cov_O5uokFDHSI4LgB2NSYKohA.b['5'][0]++;__cov_O5uokFDHSI4LgB2NSYKohA.s['23']++;throw new Error('Required role needs to be set');
	   } else {
	      __cov_O5uokFDHSI4LgB2NSYKohA.b['5'][1]++;
	   }__cov_O5uokFDHSI4LgB2NSYKohA.s['24']++;return compose().use(isAuthenticated()).use(function meetsRequirements(req, res, next) {
	      __cov_O5uokFDHSI4LgB2NSYKohA.f['6']++;__cov_O5uokFDHSI4LgB2NSYKohA.s['25']++;if (config.userRoles.indexOf(req.user.role) >= config.userRoles.indexOf(roleRequired)) {
	         __cov_O5uokFDHSI4LgB2NSYKohA.b['6'][0]++;__cov_O5uokFDHSI4LgB2NSYKohA.s['26']++;next();
	      } else {
	         __cov_O5uokFDHSI4LgB2NSYKohA.b['6'][1]++;__cov_O5uokFDHSI4LgB2NSYKohA.s['27']++;res.status(403).send('Forbidden');
	      }
	   });
	}function signToken(id) {
	   __cov_O5uokFDHSI4LgB2NSYKohA.f['7']++;__cov_O5uokFDHSI4LgB2NSYKohA.s['29']++;return jwt.sign({ _id: id }, config.secrets.session, { expiresInMinutes: 60 * 5 });
	}function setTokenCookie(req, res) {
	   __cov_O5uokFDHSI4LgB2NSYKohA.f['8']++;__cov_O5uokFDHSI4LgB2NSYKohA.s['31']++;if (!req.user) {
	      __cov_O5uokFDHSI4LgB2NSYKohA.b['7'][0]++;__cov_O5uokFDHSI4LgB2NSYKohA.s['32']++;return res.status(404).json({ message: 'Something went wrong, please try again.' });
	   } else {
	      __cov_O5uokFDHSI4LgB2NSYKohA.b['7'][1]++;
	   }__cov_O5uokFDHSI4LgB2NSYKohA.s['33']++;var token = signToken(req.user._id, req.user.role);__cov_O5uokFDHSI4LgB2NSYKohA.s['34']++;res.cookie('token', JSON.stringify(token));__cov_O5uokFDHSI4LgB2NSYKohA.s['35']++;res.redirect('/');
	}__cov_O5uokFDHSI4LgB2NSYKohA.s['36']++;exports.isAuthenticated = isAuthenticated;__cov_O5uokFDHSI4LgB2NSYKohA.s['37']++;exports.hasRole = hasRole;__cov_O5uokFDHSI4LgB2NSYKohA.s['38']++;exports.signToken = signToken;__cov_O5uokFDHSI4LgB2NSYKohA.s['39']++;exports.setTokenCookie = setTokenCookie;

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = require("express-jwt");

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = require("composable-middleware");

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __cov_oxCBhgvP9dJzR1A6wWzaSQ = Function('return this')();
	if (!__cov_oxCBhgvP9dJzR1A6wWzaSQ.__coverage__) {
	   __cov_oxCBhgvP9dJzR1A6wWzaSQ.__coverage__ = {};
	}
	__cov_oxCBhgvP9dJzR1A6wWzaSQ = __cov_oxCBhgvP9dJzR1A6wWzaSQ.__coverage__;
	if (!__cov_oxCBhgvP9dJzR1A6wWzaSQ['/Users/mhiatt/Projects/pixelnuke/src/api/auth/index.js']) {
	   __cov_oxCBhgvP9dJzR1A6wWzaSQ['/Users/mhiatt/Projects/pixelnuke/src/api/auth/index.js'] = { "path": "/Users/mhiatt/Projects/pixelnuke/src/api/auth/index.js", "s": { "1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, "8": 0 }, "b": {}, "f": {}, "fnMap": {}, "statementMap": { "1": { "start": { "line": 3, "column": 0 }, "end": { "line": 3, "column": 33 } }, "2": { "start": { "line": 4, "column": 0 }, "end": { "line": 4, "column": 35 } }, "3": { "start": { "line": 5, "column": 0 }, "end": { "line": 5, "column": 31 } }, "4": { "start": { "line": 6, "column": 0 }, "end": { "line": 6, "column": 41 } }, "5": { "start": { "line": 9, "column": 0 }, "end": { "line": 9, "column": 48 } }, "6": { "start": { "line": 11, "column": 0 }, "end": { "line": 11, "column": 30 } }, "7": { "start": { "line": 13, "column": 0 }, "end": { "line": 13, "column": 41 } }, "8": { "start": { "line": 15, "column": 0 }, "end": { "line": 15, "column": 24 } } }, "branchMap": {}, "code": ["'use strict';", "", "var express = require('express');", "var passport = require('passport');", "var config = require('config');", "var User = require('../user/user.model');", "", "// Passport Configuration", "require('./local/passport').setup(User, config);", "", "var router = express.Router();", "", "router.use('/local', require('./local'));", "", "module.exports = router;", ""] };
	}
	__cov_oxCBhgvP9dJzR1A6wWzaSQ = __cov_oxCBhgvP9dJzR1A6wWzaSQ['/Users/mhiatt/Projects/pixelnuke/src/api/auth/index.js'];
	__cov_oxCBhgvP9dJzR1A6wWzaSQ.s['1']++;var express = __webpack_require__(1);__cov_oxCBhgvP9dJzR1A6wWzaSQ.s['2']++;var passport = __webpack_require__(9);__cov_oxCBhgvP9dJzR1A6wWzaSQ.s['3']++;var config = __webpack_require__(8);__cov_oxCBhgvP9dJzR1A6wWzaSQ.s['4']++;var User = __webpack_require__(16);__cov_oxCBhgvP9dJzR1A6wWzaSQ.s['5']++;__webpack_require__(28).setup(User, config);__cov_oxCBhgvP9dJzR1A6wWzaSQ.s['6']++;var router = express.Router();__cov_oxCBhgvP9dJzR1A6wWzaSQ.s['7']++;router.use('/local', __webpack_require__(30));__cov_oxCBhgvP9dJzR1A6wWzaSQ.s['8']++;module.exports = router;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __cov_P5lQYAF8$JTV0BOj7lXlpA = Function('return this')();
	if (!__cov_P5lQYAF8$JTV0BOj7lXlpA.__coverage__) {
	   __cov_P5lQYAF8$JTV0BOj7lXlpA.__coverage__ = {};
	}
	__cov_P5lQYAF8$JTV0BOj7lXlpA = __cov_P5lQYAF8$JTV0BOj7lXlpA.__coverage__;
	if (!__cov_P5lQYAF8$JTV0BOj7lXlpA['/Users/mhiatt/Projects/pixelnuke/src/api/auth/local/passport.js']) {
	   __cov_P5lQYAF8$JTV0BOj7lXlpA['/Users/mhiatt/Projects/pixelnuke/src/api/auth/local/passport.js'] = { "path": "/Users/mhiatt/Projects/pixelnuke/src/api/auth/local/passport.js", "s": { "1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, "8": 0, "9": 0, "10": 0, "11": 0, "12": 0 }, "b": { "1": [0, 0], "2": [0, 0], "3": [0, 0] }, "f": { "1": 0, "2": 0, "3": 0 }, "fnMap": { "1": { "name": "(anonymous_1)", "line": 6, "loc": { "start": { "line": 4, "column": 16 }, "end": { "line": 4, "column": 40 } } }, "2": { "name": "(anonymous_2)", "line": 10, "loc": { "start": { "line": 9, "column": 4 }, "end": { "line": 9, "column": 36 } } }, "3": { "name": "(anonymous_3)", "line": 13, "loc": { "start": { "line": 12, "column": 9 }, "end": { "line": 12, "column": 29 } } } }, "statementMap": { "1": { "start": { "line": 1, "column": 0 }, "end": { "line": 1, "column": 35 } }, "2": { "start": { "line": 2, "column": 0 }, "end": { "line": 2, "column": 55 } }, "3": { "start": { "line": 4, "column": 0 }, "end": { "line": 25, "column": 2 } }, "4": { "start": { "line": 5, "column": 2 }, "end": { "line": 24, "column": 5 } }, "5": { "start": { "line": 10, "column": 6 }, "end": { "line": 22, "column": 9 } }, "6": { "start": { "line": 13, "column": 8 }, "end": { "line": 13, "column": 34 } }, "7": { "start": { "line": 13, "column": 17 }, "end": { "line": 13, "column": 34 } }, "8": { "start": { "line": 15, "column": 8 }, "end": { "line": 17, "column": 9 } }, "9": { "start": { "line": 16, "column": 10 }, "end": { "line": 16, "column": 81 } }, "10": { "start": { "line": 18, "column": 8 }, "end": { "line": 20, "column": 9 } }, "11": { "start": { "line": 19, "column": 10 }, "end": { "line": 19, "column": 81 } }, "12": { "start": { "line": 21, "column": 8 }, "end": { "line": 21, "column": 32 } } }, "branchMap": { "1": { "line": 14, "type": "if", "locations": [{ "start": { "line": 13, "column": 8 }, "end": { "line": 13, "column": 8 } }, { "start": { "line": 13, "column": 8 }, "end": { "line": 13, "column": 8 } }] }, "2": { "line": 16, "type": "if", "locations": [{ "start": { "line": 15, "column": 8 }, "end": { "line": 15, "column": 8 } }, { "start": { "line": 15, "column": 8 }, "end": { "line": 15, "column": 8 } }] }, "3": { "line": 19, "type": "if", "locations": [{ "start": { "line": 18, "column": 8 }, "end": { "line": 18, "column": 8 } }, { "start": { "line": 18, "column": 8 }, "end": { "line": 18, "column": 8 } }] } }, "code": ["var passport = require('passport');", "var LocalStrategy = require('passport-local').Strategy;", "", "exports.setup = function (User, config) {", "  passport.use(new LocalStrategy({", "      usernameField: 'email',", "      passwordField: 'password' // this is the virtual field on the model", "    },", "    function(email, password, done) {", "      User.findOne({", "        email: email.toLowerCase()", "      }, function(err, user) {", "        if (err) return done(err);", "", "        if (!user) {", "          return done(null, false, { message: 'This email is not registered.' });", "        }", "        if (!user.authenticate(password)) {", "          return done(null, false, { message: 'This password is not correct.' });", "        }", "        return done(null, user);", "      });", "    }", "  ));", "};"] };
	}
	__cov_P5lQYAF8$JTV0BOj7lXlpA = __cov_P5lQYAF8$JTV0BOj7lXlpA['/Users/mhiatt/Projects/pixelnuke/src/api/auth/local/passport.js'];
	__cov_P5lQYAF8$JTV0BOj7lXlpA.s['1']++;var passport = __webpack_require__(9);__cov_P5lQYAF8$JTV0BOj7lXlpA.s['2']++;var LocalStrategy = __webpack_require__(29).Strategy;__cov_P5lQYAF8$JTV0BOj7lXlpA.s['3']++;exports.setup = function (User, config) {
	   __cov_P5lQYAF8$JTV0BOj7lXlpA.f['1']++;__cov_P5lQYAF8$JTV0BOj7lXlpA.s['4']++;passport.use(new LocalStrategy({ usernameField: 'email', passwordField: 'password' }, function (email, password, done) {
	      __cov_P5lQYAF8$JTV0BOj7lXlpA.f['2']++;__cov_P5lQYAF8$JTV0BOj7lXlpA.s['5']++;User.findOne({ email: email.toLowerCase() }, function (err, user) {
	         __cov_P5lQYAF8$JTV0BOj7lXlpA.f['3']++;__cov_P5lQYAF8$JTV0BOj7lXlpA.s['6']++;if (err) {
	            __cov_P5lQYAF8$JTV0BOj7lXlpA.b['1'][0]++;__cov_P5lQYAF8$JTV0BOj7lXlpA.s['7']++;return done(err);
	         } else {
	            __cov_P5lQYAF8$JTV0BOj7lXlpA.b['1'][1]++;
	         }__cov_P5lQYAF8$JTV0BOj7lXlpA.s['8']++;if (!user) {
	            __cov_P5lQYAF8$JTV0BOj7lXlpA.b['2'][0]++;__cov_P5lQYAF8$JTV0BOj7lXlpA.s['9']++;return done(null, false, { message: 'This email is not registered.' });
	         } else {
	            __cov_P5lQYAF8$JTV0BOj7lXlpA.b['2'][1]++;
	         }__cov_P5lQYAF8$JTV0BOj7lXlpA.s['10']++;if (!user.authenticate(password)) {
	            __cov_P5lQYAF8$JTV0BOj7lXlpA.b['3'][0]++;__cov_P5lQYAF8$JTV0BOj7lXlpA.s['11']++;return done(null, false, { message: 'This password is not correct.' });
	         } else {
	            __cov_P5lQYAF8$JTV0BOj7lXlpA.b['3'][1]++;
	         }__cov_P5lQYAF8$JTV0BOj7lXlpA.s['12']++;return done(null, user);
	      });
	   }));
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = require("passport-local");

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __cov_M28crOklW_doVTqYOLr0UA = Function('return this')();
	if (!__cov_M28crOklW_doVTqYOLr0UA.__coverage__) {
	   __cov_M28crOklW_doVTqYOLr0UA.__coverage__ = {};
	}
	__cov_M28crOklW_doVTqYOLr0UA = __cov_M28crOklW_doVTqYOLr0UA.__coverage__;
	if (!__cov_M28crOklW_doVTqYOLr0UA['/Users/mhiatt/Projects/pixelnuke/src/api/auth/local/index.js']) {
	   __cov_M28crOklW_doVTqYOLr0UA['/Users/mhiatt/Projects/pixelnuke/src/api/auth/local/index.js'] = { "path": "/Users/mhiatt/Projects/pixelnuke/src/api/auth/local/index.js", "s": { "1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, "8": 0, "9": 0, "10": 0, "11": 0, "12": 0, "13": 0, "14": 0 }, "b": { "1": [0, 0], "2": [0, 0], "3": [0, 0] }, "f": { "1": 0, "2": 0 }, "fnMap": { "1": { "name": "(anonymous_1)", "line": 9, "loc": { "start": { "line": 9, "column": 17 }, "end": { "line": 9, "column": 42 } } }, "2": { "name": "(anonymous_2)", "line": 10, "loc": { "start": { "line": 10, "column": 33 }, "end": { "line": 10, "column": 60 } } } }, "statementMap": { "1": { "start": { "line": 3, "column": 0 }, "end": { "line": 3, "column": 33 } }, "2": { "start": { "line": 4, "column": 0 }, "end": { "line": 4, "column": 35 } }, "3": { "start": { "line": 5, "column": 0 }, "end": { "line": 5, "column": 38 } }, "4": { "start": { "line": 7, "column": 0 }, "end": { "line": 7, "column": 30 } }, "5": { "start": { "line": 9, "column": 0 }, "end": { "line": 18, "column": 3 } }, "6": { "start": { "line": 10, "column": 2 }, "end": { "line": 17, "column": 20 } }, "7": { "start": { "line": 11, "column": 4 }, "end": { "line": 11, "column": 28 } }, "8": { "start": { "line": 12, "column": 4 }, "end": { "line": 12, "column": 50 } }, "9": { "start": { "line": 12, "column": 15 }, "end": { "line": 12, "column": 50 } }, "10": { "start": { "line": 13, "column": 4 }, "end": { "line": 13, "column": 97 } }, "11": { "start": { "line": 13, "column": 15 }, "end": { "line": 13, "column": 97 } }, "12": { "start": { "line": 15, "column": 4 }, "end": { "line": 15, "column": 52 } }, "13": { "start": { "line": 16, "column": 4 }, "end": { "line": 16, "column": 29 } }, "14": { "start": { "line": 20, "column": 0 }, "end": { "line": 20, "column": 24 } } }, "branchMap": { "1": { "line": 11, "type": "binary-expr", "locations": [{ "start": { "line": 11, "column": 16 }, "end": { "line": 11, "column": 19 } }, { "start": { "line": 11, "column": 23 }, "end": { "line": 11, "column": 27 } }] }, "2": { "line": 12, "type": "if", "locations": [{ "start": { "line": 12, "column": 4 }, "end": { "line": 12, "column": 4 } }, { "start": { "line": 12, "column": 4 }, "end": { "line": 12, "column": 4 } }] }, "3": { "line": 13, "type": "if", "locations": [{ "start": { "line": 13, "column": 4 }, "end": { "line": 13, "column": 4 } }, { "start": { "line": 13, "column": 4 }, "end": { "line": 13, "column": 4 } }] } }, "code": ["'use strict';", "", "var express = require('express');", "var passport = require('passport');", "var auth = require('../auth.service');", "", "var router = express.Router();", "", "router.post('/', function(req, res, next) {", "  passport.authenticate('local', function (err, user, info) {", "    var error = err || info;", "    if (error) return res.status(401).json(error);", "    if (!user) return res.status(404).json({message: 'Something went wrong, please try again.'});", "", "    var token = auth.signToken(user._id, user.role);", "    res.json({token: token});", "  })(req, res, next)", "});", "", "module.exports = router;"] };
	}
	__cov_M28crOklW_doVTqYOLr0UA = __cov_M28crOklW_doVTqYOLr0UA['/Users/mhiatt/Projects/pixelnuke/src/api/auth/local/index.js'];
	__cov_M28crOklW_doVTqYOLr0UA.s['1']++;var express = __webpack_require__(1);__cov_M28crOklW_doVTqYOLr0UA.s['2']++;var passport = __webpack_require__(9);__cov_M28crOklW_doVTqYOLr0UA.s['3']++;var auth = __webpack_require__(24);__cov_M28crOklW_doVTqYOLr0UA.s['4']++;var router = express.Router();__cov_M28crOklW_doVTqYOLr0UA.s['5']++;router.post('/', function (req, res, next) {
	   __cov_M28crOklW_doVTqYOLr0UA.f['1']++;__cov_M28crOklW_doVTqYOLr0UA.s['6']++;passport.authenticate('local', function (err, user, info) {
	      __cov_M28crOklW_doVTqYOLr0UA.f['2']++;__cov_M28crOklW_doVTqYOLr0UA.s['7']++;var error = (__cov_M28crOklW_doVTqYOLr0UA.b['1'][0]++, err) || (__cov_M28crOklW_doVTqYOLr0UA.b['1'][1]++, info);__cov_M28crOklW_doVTqYOLr0UA.s['8']++;if (error) {
	         __cov_M28crOklW_doVTqYOLr0UA.b['2'][0]++;__cov_M28crOklW_doVTqYOLr0UA.s['9']++;return res.status(401).json(error);
	      } else {
	         __cov_M28crOklW_doVTqYOLr0UA.b['2'][1]++;
	      }__cov_M28crOklW_doVTqYOLr0UA.s['10']++;if (!user) {
	         __cov_M28crOklW_doVTqYOLr0UA.b['3'][0]++;__cov_M28crOklW_doVTqYOLr0UA.s['11']++;return res.status(404).json({ message: 'Something went wrong, please try again.' });
	      } else {
	         __cov_M28crOklW_doVTqYOLr0UA.b['3'][1]++;
	      }__cov_M28crOklW_doVTqYOLr0UA.s['12']++;var token = auth.signToken(user._id, user.role);__cov_M28crOklW_doVTqYOLr0UA.s['13']++;res.json({ token: token });
	   })(req, res, next);
	});__cov_M28crOklW_doVTqYOLr0UA.s['14']++;module.exports = router;

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = require("socket.io");

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __cov_G08NDDUFTfG3RfQFWFRj9w = Function('return this')();
	if (!__cov_G08NDDUFTfG3RfQFWFRj9w.__coverage__) {
	   __cov_G08NDDUFTfG3RfQFWFRj9w.__coverage__ = {};
	}
	__cov_G08NDDUFTfG3RfQFWFRj9w = __cov_G08NDDUFTfG3RfQFWFRj9w.__coverage__;
	if (!__cov_G08NDDUFTfG3RfQFWFRj9w['/Users/mhiatt/Projects/pixelnuke/src/api/thing/thing.socket.js']) {
	   __cov_G08NDDUFTfG3RfQFWFRj9w['/Users/mhiatt/Projects/pixelnuke/src/api/thing/thing.socket.js'] = { "path": "/Users/mhiatt/Projects/pixelnuke/src/api/thing/thing.socket.js", "s": { "1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 1, "8": 0, "9": 1, "10": 0 }, "b": {}, "f": { "1": 0, "2": 0, "3": 0, "4": 0, "5": 0 }, "fnMap": { "1": { "name": "(anonymous_1)", "line": 9, "loc": { "start": { "line": 9, "column": 19 }, "end": { "line": 9, "column": 36 } } }, "2": { "name": "(anonymous_2)", "line": 10, "loc": { "start": { "line": 10, "column": 28 }, "end": { "line": 10, "column": 43 } } }, "3": { "name": "(anonymous_3)", "line": 13, "loc": { "start": { "line": 13, "column": 30 }, "end": { "line": 13, "column": 45 } } }, "4": { "name": "onSave", "line": 18, "loc": { "start": { "line": 18, "column": 0 }, "end": { "line": 18, "column": 33 } } }, "5": { "name": "onRemove", "line": 22, "loc": { "start": { "line": 22, "column": 0 }, "end": { "line": 22, "column": 35 } } } }, "statementMap": { "1": { "start": { "line": 7, "column": 0 }, "end": { "line": 7, "column": 37 } }, "2": { "start": { "line": 9, "column": 0 }, "end": { "line": 16, "column": 1 } }, "3": { "start": { "line": 10, "column": 2 }, "end": { "line": 12, "column": 5 } }, "4": { "start": { "line": 11, "column": 4 }, "end": { "line": 11, "column": 24 } }, "5": { "start": { "line": 13, "column": 2 }, "end": { "line": 15, "column": 5 } }, "6": { "start": { "line": 14, "column": 4 }, "end": { "line": 14, "column": 26 } }, "7": { "start": { "line": 18, "column": 0 }, "end": { "line": 20, "column": 1 } }, "8": { "start": { "line": 19, "column": 2 }, "end": { "line": 19, "column": 33 } }, "9": { "start": { "line": 22, "column": 0 }, "end": { "line": 24, "column": 1 } }, "10": { "start": { "line": 23, "column": 2 }, "end": { "line": 23, "column": 35 } } }, "branchMap": {}, "code": ["/**", " * Broadcast updates to client when the model changes", " */", "", "'use strict';", "", "var thing = require('./thing.model');", "", "exports.register = function(socket) {", "  thing.schema.post('save', function (doc) {", "    onSave(socket, doc);", "  });", "  thing.schema.post('remove', function (doc) {", "    onRemove(socket, doc);", "  });", "}", "", "function onSave(socket, doc, cb) {", "  socket.emit('thing:save', doc);", "}", "", "function onRemove(socket, doc, cb) {", "  socket.emit('thing:remove', doc);", "}"] };
	}
	__cov_G08NDDUFTfG3RfQFWFRj9w = __cov_G08NDDUFTfG3RfQFWFRj9w['/Users/mhiatt/Projects/pixelnuke/src/api/thing/thing.socket.js'];
	__cov_G08NDDUFTfG3RfQFWFRj9w.s['1']++;var thing = __webpack_require__(14);__cov_G08NDDUFTfG3RfQFWFRj9w.s['2']++;exports.register = function (socket) {
	   __cov_G08NDDUFTfG3RfQFWFRj9w.f['1']++;__cov_G08NDDUFTfG3RfQFWFRj9w.s['3']++;thing.schema.post('save', function (doc) {
	      __cov_G08NDDUFTfG3RfQFWFRj9w.f['2']++;__cov_G08NDDUFTfG3RfQFWFRj9w.s['4']++;onSave(socket, doc);
	   });__cov_G08NDDUFTfG3RfQFWFRj9w.s['5']++;thing.schema.post('remove', function (doc) {
	      __cov_G08NDDUFTfG3RfQFWFRj9w.f['3']++;__cov_G08NDDUFTfG3RfQFWFRj9w.s['6']++;onRemove(socket, doc);
	   });
	};function onSave(socket, doc, cb) {
	   __cov_G08NDDUFTfG3RfQFWFRj9w.f['4']++;__cov_G08NDDUFTfG3RfQFWFRj9w.s['8']++;socket.emit('thing:save', doc);
	}function onRemove(socket, doc, cb) {
	   __cov_G08NDDUFTfG3RfQFWFRj9w.f['5']++;__cov_G08NDDUFTfG3RfQFWFRj9w.s['10']++;socket.emit('thing:remove', doc);
	}

/***/ }
/******/ ]);
//# sourceMappingURL=server.bundle.js.map