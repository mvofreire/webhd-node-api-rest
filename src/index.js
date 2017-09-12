const DbConnection = require( './db')
const ApiRoutes  = require('./routes')
const _defaultConfig = require('./default-config')
const Koa = require('koa')

const ApiRest = {
    init(config) {
        const _config = Object.assign({}, _defaultConfig, config)
        const app = new Koa();

        //init db connection
        DbConnection.init(_config.db)

        //register routes
        app.use(ApiRoutes.registerRoutes())

        console.log(`server listenig on port localhost:${_config.server.port}`);
        app.listen(_config.server.port);
    }
}

module.exports = ApiRest