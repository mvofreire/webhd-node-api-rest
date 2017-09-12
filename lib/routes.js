import compose from 'koa-compose'
import Router from 'koa-router'
import importDir from 'import-dir'

const ApiRoutes = {
    registerRoutes() {

        const routerConfigs = [{ folder: '../controllers', prefix: '/api' }]
        const composed = routerConfigs.reduce((prev, curr) => {

            const routes = importDir('./' + curr.folder)
            const router = new Router({ prefix: curr.prefix })

            Object.keys(routes).map(name => {

                const ctrl = new routes[name](router)
                Object.keys(ctrl).map((methodName) => {
                    if (methodName.indexOf('_') == -1) {
                        const type = methodName.split('$')[0];
                        const name = methodName.split('$')[1];

                        router[type]('/' + name, ctrl[methodName])
                    }
                })

            })

            return [router.routes(), router.allowedMethods(), ...prev]
        }, [])
        return compose(composed)
    }
}

export default ApiRoutes