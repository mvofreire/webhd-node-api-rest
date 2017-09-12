import Sequelize from 'sequelize'
import DbConnection from './db'

const Model = {
    _instance:null,

    define(model){
        this._instance = DbConnection.instance().define(model.table, model.attributes)
        this._instance.sync()
        this._instance.bind(model.methods);
        return this._instance
    }
}

module.exports = Model