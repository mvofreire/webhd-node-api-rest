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