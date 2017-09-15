'use strict';

Object.defineProperty(exports, "__esModule", {
        value: true
});

var _db = require('./db');

var _db2 = _interopRequireDefault(_db);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _defaultConfig2 = require('./default-config');

var _defaultConfig3 = _interopRequireDefault(_defaultConfig2);

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaJson = require('koa-json');

var _koaJson2 = _interopRequireDefault(_koaJson);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ApiRest = {
        init: function init(config) {
                var _config = Object.assign({}, _defaultConfig3.default, config);
                var app = new _koa2.default();

                //init db connection
                _db2.default.init(_config.db);

                //json
                app.use((0, _koaJson2.default)());

                //register routes
                app.use(_routes2.default.registerRoutes());

                console.log('server listenig on port localhost:' + _config.server.port);
                app.listen(_config.server.port);
        }
};

exports.default = ApiRest;