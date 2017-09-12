import Sequelize from 'sequelize'

const DbConnection = {
    _instance:null,

    init()
    {
        const configDb = require('app/config/db.config')
        this._instance = new Sequelize(configDb.database, configDb.username, configDb.password, configDb.options)
        this._instance.authenticate().then(() => {
            console.log('Connection has been established successfully.');
        }).catch(err => {
            console.error('Unable to connect to the database:', err);
        });
    },

    instance(){
        return this._instance;
    }
}

export default DbConnection