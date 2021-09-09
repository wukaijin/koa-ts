import Koa from 'koa'
import { useMiddlewares } from "./middlewares";
import { useRouters } from './routers'
import { responseError, responseSuccess } from './utils'
const app: Koa = new Koa()

useMiddlewares(app)
useRouters(app)

Object.assign(app.context, {
  responseError, responseSuccess
})

const listeb = app.listen(3008, () => {
  console.log('listeb')

})
// console.log(listeb)
