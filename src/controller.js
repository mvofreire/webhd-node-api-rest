
class Controller {

    _model = null;
    _route = null;

    _defaultRoutes = [
        {
            method: 'get',
            endPoint: '/{nameModel}',
            action: (ctx) => {
                ctx.body = 'get teste';
            }
        },
        {
            method: 'get',
            endPoint: '/{nameModel}/:id',
            action: (ctx) => {
                ctx.body = 'get teste id';
            }
        },
        {
            method: 'post',
            endPoint: '/{nameModel}',
            action: (ctx) => {
                ctx.body = 'post teste';
            }
        },
        {
            method: 'put',
            endPoint: '/{nameModel}',
            action: (ctx) => {
                ctx.body = 'put teste';
            }
        },
        {
            method: 'delete',
            endPoint: '/{nameModel}',
            action: (ctx) => {
                ctx.body = 'delete teste';
            }
        }
    ]

    constructor(route, Model) {

        this._model = Model
        this._route = route

        this._registerDefaultRoutes(Model)
    }

    _registerDefaultRoutes(){
        this._defaultRoutes.map((_defaultRoute) => {
            const methodName = _defaultRoute.endPoint.replace('{nameModel}', _model.table);
            _route[_defaultRoute.method](methodName, _defaultRoute.action);
        })
    }
}

export default Controller