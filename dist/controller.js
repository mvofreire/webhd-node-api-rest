'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Controller = function () {
    function Controller(route, Model) {
        var _this = this;

        _classCallCheck(this, Controller);

        this._model = null;
        this._route = null;
        this._defaultRoutes = [{
            method: 'get',
            endPoint: '/{nameModel}',
            action: function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(ctx) {
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    ctx.body = 'get teste';

                                case 1:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, _this);
                }));

                function action(_x) {
                    return _ref.apply(this, arguments);
                }

                return action;
            }()
        }, {
            method: 'get',
            endPoint: '/{nameModel}/:id',
            action: function () {
                var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(ctx) {
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                        while (1) {
                            switch (_context2.prev = _context2.next) {
                                case 0:
                                    ctx.body = 'get teste id';

                                case 1:
                                case 'end':
                                    return _context2.stop();
                            }
                        }
                    }, _callee2, _this);
                }));

                function action(_x2) {
                    return _ref2.apply(this, arguments);
                }

                return action;
            }()
        }, {
            method: 'post',
            endPoint: '/{nameModel}',
            action: function () {
                var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(ctx) {
                    return regeneratorRuntime.wrap(function _callee3$(_context3) {
                        while (1) {
                            switch (_context3.prev = _context3.next) {
                                case 0:
                                    ctx.body = 'post teste';

                                case 1:
                                case 'end':
                                    return _context3.stop();
                            }
                        }
                    }, _callee3, _this);
                }));

                function action(_x3) {
                    return _ref3.apply(this, arguments);
                }

                return action;
            }()
        }, {
            method: 'put',
            endPoint: '/{nameModel}',
            action: function () {
                var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(ctx) {
                    return regeneratorRuntime.wrap(function _callee4$(_context4) {
                        while (1) {
                            switch (_context4.prev = _context4.next) {
                                case 0:
                                    ctx.body = 'put teste';

                                case 1:
                                case 'end':
                                    return _context4.stop();
                            }
                        }
                    }, _callee4, _this);
                }));

                function action(_x4) {
                    return _ref4.apply(this, arguments);
                }

                return action;
            }()
        }, {
            method: 'delete',
            endPoint: '/{nameModel}',
            action: function () {
                var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(ctx) {
                    return regeneratorRuntime.wrap(function _callee5$(_context5) {
                        while (1) {
                            switch (_context5.prev = _context5.next) {
                                case 0:
                                    ctx.body = 'delete teste';

                                case 1:
                                case 'end':
                                    return _context5.stop();
                            }
                        }
                    }, _callee5, _this);
                }));

                function action(_x5) {
                    return _ref5.apply(this, arguments);
                }

                return action;
            }()
        }];

        this._route = route;
        if (Model) {
            this._model = Model;
            this._registerDefaultRoutes(this._model);
        }
    }

    _createClass(Controller, [{
        key: '_registerDefaultRoutes',
        value: function _registerDefaultRoutes(model) {
            var _this2 = this;

            this._defaultRoutes.map(function (_defaultRoute) {
                var methodName = _defaultRoute.endPoint.replace('{nameModel}', model.name);
                _this2._route[_defaultRoute.method](methodName, _defaultRoute.action);
            });
        }
    }]);

    return Controller;
}();

exports.default = Controller;