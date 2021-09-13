import { UserAttributes } from '@/models';
import { Context, Next } from 'koa'
import { toMd5 } from '@/utils'
import {  UserService } from '@/services'
export const signin = async (ctx: Context, next: Next) => {
  const { request } = ctx
  // let  { uid, password } = request.body
  let  params: UserAttributes = request.body
  params.password = toMd5(params.password)
  const user = await UserService.find(params)
  if (!user) {
    ctx.responseError("用户名或密码错误")
    await next()
  } else {
    ctx.responseSuccess(ctx, `ojbk`)
    await next()
  }
}
