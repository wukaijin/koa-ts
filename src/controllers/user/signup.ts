import { Context, Next } from 'koa'
import { toMd5 } from '@/utils'
import {  UserService } from '@/services'
export const signup = async (ctx: Context, next: Next) => {
  const { request } = ctx
  let  { uid, password } = request.body
  password = toMd5(password)
  ctx.responseSuccess(ctx, `ojbk
  ${uid}
  ${password}
  `)
  UserService.set({ uid, password })
  next()
}
