import DbConnection from '../../dist/db'
import Model, { Sequelize } from '../../dist/model'

DbConnection.init({
    database: null,
    username: 'root',
    password: '',

    options: {
        host: 'localhost',
        dialect: 'sqlite',
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
        // SQLite only
        storage: 'test/test.sqlite'
    }
})

const Post = {

    table: 'post',

    attributes: {
        id: {
            primaryKey:true,
            type: Sequelize.INTEGER
        },
        type: {
            type: Sequelize.STRING
        }
    },

    methods:
    {
        testAttributeId: () => {
            return this.id
        },
        testAttributeType: () => {
            return this.type
        }
    }
}

export default Model.define(Post)