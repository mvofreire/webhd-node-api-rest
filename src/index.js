import DbConnection from './db'
import ApiRoutes  from './routes'
import _defaultConfig from './default-config'
import Koa from 'koa'
import json from 'koa-json'

import middleware from './middleware'

const ApiRest = {
    init(config) {
        const _config = Object.assign({}, _defaultConfig, config)
        const app = new Koa();

        //init db connection
        DbConnection.init(_config.db)

        app.use(middleware())

        //register routes
        app.use(ApiRoutes.registerRoutes())

        //404
        app.use(ctx => ctx.status = 404)

        console.log(`server listenig on port localhost:${_config.server.port}`);
        app.listen(_config.server.port);
    }
}

export default ApiRest