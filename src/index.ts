import Koa from 'koa'
import { useMiddlewares } from './middlewares'
import { registerRoutes } from './routers'
import { responseError, responseSuccess } from './utils'
// import  './utils/log'

import './models/sequelize'

const app: Koa = new Koa()

useMiddlewares(app)
registerRoutes(app)

Object.assign(app.context, {
  responseError,
  responseSuccess
})

// const listeb = app.listen(3008, () => {
//   console.log('koa-ts app start!')
// })
// console.log(listeb)
