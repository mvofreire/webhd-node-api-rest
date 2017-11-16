import Sequelize from 'sequelize'
import DbConnection from './db'

class ActiveModel {
    constructor(table, attributes) {
        this._instance = DbConnection.instance().define(this.getTable(), this.getAttributes(), {
            instanceMethods: this
        })
        this._instance.sync()
        return this._instance
    }
}

export default ActiveModel

export { Sequelize }
