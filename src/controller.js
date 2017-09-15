
class Controller {

    _model = null;
    _route = null;

    _defaultRoutes = [
        {
            method: 'get',
            endPoint: '/{nameModel}',
            action: async (ctx) => {
                ctx.body = 'get teste';
            }
        },
        {
            method: 'get',
            endPoint: '/{nameModel}/:id',
            action: async (ctx) => {
                ctx.body = 'get teste id';
            }
        },
        {
            method: 'post',
            endPoint: '/{nameModel}',
            action: async (ctx) => {
                ctx.body = 'post teste';
            }
        },
        {
            method: 'put',
            endPoint: '/{nameModel}',
            action: async (ctx) => {
                ctx.body = 'put teste';
            }
        },
        {
            method: 'delete',
            endPoint: '/{nameModel}',
            action: async (ctx) => {
                ctx.body = 'delete teste';
            }
        }
    ]

    constructor(route, Model) {
        this._route = route
        if(Model)
        {
            this._model = Model
            this._registerDefaultRoutes(this._model)
        }
    }

    _registerDefaultRoutes(model){
        this._defaultRoutes.map((_defaultRoute) => {
            const methodName = _defaultRoute.endPoint.replace('{nameModel}', model.name);
            this._route[_defaultRoute.method](methodName, _defaultRoute.action);
        })
    }
}

export default Controller