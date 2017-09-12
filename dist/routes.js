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