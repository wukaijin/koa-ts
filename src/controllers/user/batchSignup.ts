import { UserAttributes } from '@/models/User'
import { Context, Next } from 'koa'
import { toMd5 } from '@/utils'
import { UserService } from '@/services'

export const batchSignup = async (ctx: Context, next: Next) => {
  const { request } = ctx
  let params: UserAttributes[] = request.body
  params.forEach(e => {
    e.password = toMd5(e.password)
  })
  debugger
  const result = await UserService.batchsSet(params)
  ctx.responseSuccess(result)
  await next()
}
