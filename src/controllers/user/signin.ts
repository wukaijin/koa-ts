import { UserAttributes } from '@/models'
import { Context, Next } from 'koa'
import { toMd5 } from '@/utils'
import { UserService } from '@/services'
export const signin = async (ctx: Context, next: Next) => {
  const { request } = ctx
  // let  { uid, password } = request.body
  let params: UserAttributes = request.body
  params.password = toMd5(params.password)
  const user = await UserService.find(params)
  if (!user) {
    ctx.responseSuccess(null, { message: '用户名或密码错误', code: -1 })
    // await next()
  } else {
    user.loginAt = new Date()
    await user.save()
    ctx.session!.name = user.uid
    ctx.session!.visit = false
    ctx.responseSuccess(`ojbk`)
    await next()
  }
}
