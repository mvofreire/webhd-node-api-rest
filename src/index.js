import DbConnection from './db'
import ApiRoutes  from './routes'
import _defaultConfig from './default-config'
import Koa from 'koa'

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

export default ApiRest