import Koa, { Context } from 'koa'
import { useMiddlewares } from './middlewares'
import { registerRoutes } from './routers'
import { extendContextWithReply, useSession } from './utils'
// import  './utils/log'

import './models/sequelize'

const app: Koa = new Koa()

useMiddlewares(app)
registerRoutes(app)
useSession(app)


extendContextWithReply(app.context as Context)

const listeb = app.listen(3008, () => {
  console.log('koa-ts app start!')
})
// console.log(listeb)
