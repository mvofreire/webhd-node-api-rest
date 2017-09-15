'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = middleware;

var _koaCompose = require('koa-compose');

var _koaCompose2 = _interopRequireDefault(_koaCompose);

var _koaConvert = require('koa-convert');

var _koaConvert2 = _interopRequireDefault(_koaConvert);

var _koaLogger = require('koa-logger');

var _koaLogger2 = _interopRequireDefault(_koaLogger);

var _koaCors = require('koa-cors');

var _koaCors2 = _interopRequireDefault(_koaCors);

var _koaBodyparser = require('koa-bodyparser');

var _koaBodyparser2 = _interopRequireDefault(_koaBodyparser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function middleware() {
    return (0, _koaCompose2.default)([(0, _koaLogger2.default)(), (0, _koaConvert2.default)((0, _koaCors2.default)()), (0, _koaConvert2.default)((0, _koaBodyparser2.default)())]);
}