

import DbConnection from './db'
import ApiRoutes from './routes'

const ApiRest = {
    init() {
        const configServer = require('app/config/server.config')
        const Koa = require('koa')
        const app = new Koa();

        //init db connection
        DbConnection.init()

        //register routes
        app.use(ApiRoutes.registerRoutes())

        console.log(`server listenig on port localhost:${configServer.port}`);
        app.listen(configServer.port);
    }
}

module.exports = ApiRest