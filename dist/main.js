'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Controller = function () {
    function Controller(route, Model) {
        _classCallCheck(this, Controller);

        this._model = null;
        this._route = null;
        this._defaultRoutes = [{
            method: 'GET',
            endPoint: '/'
        }];


        this._model = Model;
        this._route = route;

        this._registerDefaultRoutes(Model);
    }

    _createClass(Controller, [{
        key: '_registerDefaultRoutes',
        value: function _registerDefaultRoutes() {
            this._defaultRoutes.map(function (_defaultRoute) {
                console.log(_defaultRoute);
            });
        }
    }]);

    return Controller;
}();

exports.default = Controller;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DbConnection = {
    _instance: null,

    init: function init(config) {
        this._instance = new _sequelize2.default(config.database, config.username, config.password, config.options);
        this._instance.authenticate().then(function () {
            console.log('Connection has been established successfully.');
        }).catch(function (err) {
            console.error('Unable to connect to the database:', err);
        });
    },
    instance: function instance() {
        return this._instance;
    }
};

exports.default = DbConnection;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    server: {
        port: 5000
    },
    db: {
        database: null,
        username: 'root',
        password: '',

        options: {
            host: 'localhost',
            dialect: 'mysql',

            pool: {
                max: 5,
                min: 0,
                idle: 10000
            }

            // SQLite only
            //storage: 'path/to/database.sqlite'
        }
    }
};
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ApiRest = {
        init: function init(config) {
                var _config = Object.assign({}, _defaultConfig3.default, config);
                var app = new _koa2.default();

                //init db connection
                _db2.default.init(_config.db);

                //register routes
                app.use(_routes2.default.registerRoutes());

                console.log('server listenig on port localhost:' + _config.server.port);
                app.listen(_config.server.port);
        }
};

exports.default = ApiRest;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

var _db = require('./db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Model = {
    _instance: null,

    define: function define(model) {
        this._instance = _db2.default.instance().define(model.table, model.attributes);
        this._instance.sync();
        this._instance.bind(model.methods);
        return this._instance;
    }
};

exports.default = Model;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _koaCompose = require('koa-compose');

var _koaCompose2 = _interopRequireDefault(_koaCompose);

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _appRootPath = require('app-root-path');

var _appRootPath2 = _interopRequireDefault(_appRootPath);

var _importDir = require('import-dir');

var _importDir2 = _interopRequireDefault(_importDir);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var ApiRoutes = {
    registerRoutes: function registerRoutes() {

        var routerConfigs = [{ folder: _appRootPath2.default + '/controllers', prefix: '/api' }];
        var composed = routerConfigs.reduce(function (prev, curr) {

            var routes = (0, _importDir2.default)(curr.folder);
            var router = new _koaRouter2.default({ prefix: curr.prefix });

            Object.keys(routes).map(function (name) {

                var ctrl = new routes[name](router);
                Object.keys(ctrl).map(function (methodName) {
                    if (methodName.indexOf('_') == -1) {
                        var type = methodName.split('$')[0];
                        var _name = methodName.split('$')[1];

                        router[type]('/' + _name, ctrl[methodName]);
                    }
                });
            });

            return [router.routes(), router.allowedMethods()].concat(_toConsumableArray(prev));
        }, []);
        return (0, _koaCompose2.default)(composed);
    }
};

exports.default = ApiRoutes;