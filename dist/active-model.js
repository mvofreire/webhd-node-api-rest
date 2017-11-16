'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Sequelize = undefined;

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

var _db = require('./db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ActiveModel = function ActiveModel(table, attributes) {
    _classCallCheck(this, ActiveModel);

    this._instance = _db2.default.instance().define(this.getTable(), this.getAttributes(), {
        instanceMethods: this
    });
    this._instance.sync();
    return this._instance;
};

exports.default = ActiveModel;
exports.Sequelize = _sequelize2.default;