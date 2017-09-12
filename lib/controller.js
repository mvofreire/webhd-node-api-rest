
class Controller {

    _model = null
    _route = null

    _defaultRoutes = [
        {
            method: 'GET',
            endPoint: '/'
        }
    ]

    constructor(route, Model) {
        
        this._model = Model
        this._route = route

        //this._registerDefaultRoutes(Model)
    }

    _registerDefaultRoutes = () => {
        this._defaultRoutes.map((_defaultRoute) => {
            console.log(_defaultRoute);
        })
    }
}

export default Controller