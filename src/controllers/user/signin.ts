import { Context, Next } from 'koa'
import { toMd5 } from '@/utils'

export const signin = async (ctx: Context, next: Next) => {
  const { request } = ctx
  let  { uid, password } = request.body
  password = toMd5(password)
  ctx.responseSuccess(ctx, `ojbk
  ${uid}
  ${password}
  `)
  next()
}
