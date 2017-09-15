import compose from 'koa-compose'
import convert from 'koa-convert'
import cors from 'koa-cors'
//import json from 'koa-json'
import bodyParser from 'koa-bodyparser'

export default function middleware() {
    return compose([
        convert(cors()),
        convert(bodyParser()),
    ])
}