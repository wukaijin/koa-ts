import Koa from 'koa'
import { useMiddlewares } from "./middlewares";
import { useRouters } from './routers'
const app: Koa = new Koa()

useMiddlewares(app)
useRouters(app)

const listeb = app.listen(3008, () => {
  console.log('listeb')

})
// console.log(listeb)
