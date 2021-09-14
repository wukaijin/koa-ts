import { UserAttributes } from '@/models/User'
import { Context, Next } from 'koa'
import { UserService } from '@/services'
import { User } from '@/models'
import { WhereOptions } from 'sequelize/types'

export const isRegist = async (ctx: Context, next: Next) => {
  const { request } = ctx
  let params: WhereOptions<UserAttributes> = {
    uid: request.query.uid || ''
  }
  const result = await UserService.find(params)
  console.log(result)
  if (result instanceof User) {
    ctx.responseError(null)
    ctx.responseSuccess(null, { message: '已被注册', code: -1 })
  } else {
    ctx.responseSuccess(null)
  }
  await next()
}
