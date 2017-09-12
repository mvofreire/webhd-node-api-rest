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