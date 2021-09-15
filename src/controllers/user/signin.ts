import { UserAttributes } from '@/models'
import { Context, Next } from 'koa'
import { toMd5 } from '@/utils'
import { UserService } from '@/services'
import { SESSION_KEY } from '@/config/session'
export const signin = async (ctx: Context, next: Next) => {
  const { request } = ctx
  // let  { uid, password } = request.body
  let params: UserAttributes = request.body
  params.password = toMd5(params.password)
  const user = await UserService.find(params)
  if (!user) {
    ctx.reply.fail('用户名或密码错误')
    // await next()
  } else {
    user.loginAt = new Date()
    await user.save()
    ctx.session!.name = user.uid
    ctx.session!.visit = false
    ctx.reply.success(`ojbk`)
    await next()
  }
}

export const signout = async (ctx: Context, next: Next) => {
  const { request } = ctx
  // let  { uid, password } = request.body
  // ctx.cookies.set(SESSION_KEY, null)
  ctx.reply.success(`ojbk`)
  await next()
}
