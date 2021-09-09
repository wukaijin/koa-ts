import { Context, Next } from 'koa'
import { toMd5 } from '@/utils'
import {  User } from '@/services/user'
export const signup = async (ctx: Context, next: Next) => {
  const { request } = ctx
  let  { uid, password } = request.body
  password = toMd5(password)
  ctx.responseSuccess(ctx, `ojbk
  ${uid}
  ${password}
  `)
  User()
  next()
}
