import Sequelize from 'sequelize'

const DbConnection = {
    _instance: null,

    init(config) {
        this._instance = new Sequelize(config.database, config.username, config.password, config.options)
        this._instance.authenticate().then(() => {
            console.log('Connection has been established successfully.');
        }).catch(err => {
            console.error('Unable to connect to the database:', err);
        });
    },

    instance() {
        return this._instance;
    }
}

export default DbConnection