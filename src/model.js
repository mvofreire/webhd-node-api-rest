import Sequelize from 'sequelize'
import DbConnection from './db'

const Model = {
    _instance: null,

    define(model) {
        
        this._instance = DbConnection.instance().define(model.table, model.attributes, {
            instanceMethods:model.methods
        })

        this._instance.sync()
        return this._instance
    }
}

export default Model

export { Sequelize }