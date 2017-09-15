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
            method: 'get',
            endPoint: '/{nameModel}',
            action: function action(ctx) {
                ctx.body = 'get teste';
            }
        }, {
            method: 'get',
            endPoint: '/{nameModel}/:id',
            action: function action(ctx) {
                ctx.body = 'get teste id';
            }
        }, {
            method: 'post',
            endPoint: '/{nameModel}',
            action: function action(ctx) {
                ctx.body = 'post teste';
            }
        }, {
            method: 'put',
            endPoint: '/{nameModel}',
            action: function action(ctx) {
                ctx.body = 'put teste';
            }
        }, {
            method: 'delete',
            endPoint: '/{nameModel}',
            action: function action(ctx) {
                ctx.body = 'delete teste';
            }
        }];


        this._model = Model;
        this._route = route;

        this._registerDefaultRoutes(Model);
    }

    _createClass(Controller, [{
        key: '_registerDefaultRoutes',
        value: function _registerDefaultRoutes() {
            this._defaultRoutes.map(function (_defaultRoute) {
                var methodName = _defaultRoute.endPoint.replace('{nameModel}', _model.table);
                _route[_defaultRoute.method](methodName, _defaultRoute.action);
            });
        }
    }]);

    return Controller;
}();

exports.default = Controller;