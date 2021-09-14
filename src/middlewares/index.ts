import Koa from 'koa'
import koaBody from 'koa-body'
import koaLogger from 'koa-logger'

export const useMiddlewares = (app: Koa) => {
  app.use(koaBody())
  app.use(koaLogger())
}
