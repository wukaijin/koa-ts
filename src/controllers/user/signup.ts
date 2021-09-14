import { UserAttributes } from '@/models/User'
import { Context, Next } from 'koa'
import { toMd5 } from '@/utils'
import { UserService } from '@/services'

export const signup = async (ctx: Context, next: Next) => {
  const { request } = ctx
  let params: UserAttributes = request.body
  params.password = toMd5(params.password)
  const result = await UserService.set(params)
  ctx.responseSuccess(result)
  await next()
}
