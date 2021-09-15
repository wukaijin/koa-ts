import Koa, { Context } from 'koa'
import { useMiddlewares } from './middlewares'
import { registerRoutes } from './routers'
import { extendContextWithReply, useSession, logger } from './utils'
// import  './utils/log'

import './models/sequelize'

const app: Koa = new Koa()

useMiddlewares(app)
registerRoutes(app)
useSession(app)


extendContextWithReply(app.context as Context)

app.listen(3008, () => {
  logger.success('Koa app start!')
  // logger.error('naasd kashd kajshd kasv a')
  // logger.info([1,2,3,4,5,7])
})
