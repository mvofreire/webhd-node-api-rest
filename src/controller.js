
class Controller {

    _model = null;
    _route = null;

    _defaultRoutes = [
        {
            method: 'get',
            endPoint: '/{nameModel}',
            action: async (ctx) => {
                ctx.body = await this._model.findAll().then(rs => rs);
            }
        },
        {
            method: 'get',
            endPoint: '/{nameModel}/:id',
            action: async (ctx) => {
                const { id } = ctx.params
                ctx.body = await this._model.findById(id).then(r => r);
            }
        },
        {
            method: 'post',
            endPoint: '/{nameModel}',
            action: async (ctx) => {
                ctx.body = await this._model.create(ctx.request.body).then(x => x);
            }
        },
        {
            method: 'put',
            endPoint: '/{nameModel}',
            action: async (ctx) => {
                const { id } = ctx.params
                const model = this._model.findById(id).then(r => r)
                if (!model.isNewRecord)
                    ctx.body = await model.update(ctx.request.body).then(up => up)
                else
                    ctx.status = 404
            }
        },
        {
            method: 'delete',
            endPoint: '/{nameModel}',
            action: async (ctx) => {
                const { id } = ctx.params
                const model = this._model.findById(id).then(r => r)
                if (!model.isNewRecord)
                    ctx.body = await model.destroy(ctx.request.body).then(d => d)
                else
                    ctx.status = 404
            }
        }
    ]

    constructor(route, Model) {
        this._route = route
        if (Model) {
            this._model = Model
            this._registerDefaultRoutes(this._model)
        }
    }

    _registerDefaultRoutes(model) {
        this._defaultRoutes.map((_defaultRoute) => {
            const methodName = _defaultRoute.endPoint.replace('{nameModel}', model.name);
            this._route[_defaultRoute.method](methodName, _defaultRoute.action.bind(this));
        })
    }
}

export default Controller