import Koa from 'koa'
import Router from 'koa-router'
import { userPath, userRouter } from './user'
const router: Router = new Router({
  prefix: '/koa-api'
}) // 路由总线

router.use(userPath, userRouter.routes())

export const useRouters = (app: Koa) => {
  app.use(router.routes())
}
