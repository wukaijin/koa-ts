import Router from 'koa-router'
import Koa from 'koa'
export const userPath = '/user'
export const userRouter = new Router()
// export const userRouter = () => {
//   return userRouter.routes()
// }
userRouter.get('/signup', (ctx) => {
  console.log(ctx)
  ctx.body = 'signup'

})
