import { User, UserAttributes } from '@/models'
import { Context, Next } from 'koa'
import { toMd5 } from '@/utils'
import { UserService } from '@/services'
import moment from 'moment'

export const list = async (ctx: Context, next: Next) => {
  const { request } = ctx
  // let  { uid, password } = request.body
  let params: UserAttributes = request.body
  params.password = toMd5(params.password)
  const users = await UserService.list()
  if (!users) {
    ctx.responseSuccess(null, { message: '用户名或密码错误', code: -1 })
    await next()
  } else {
    const list = users.map(u => ({
      id: u.id,
      uid: u.uid,
      email: u.email,
      createdAt:
        u.createdAt && moment(u.createdAt).format('YYYY-MM-DD HH:mm:ss'),
      loginAt: u.loginAt && moment(u.loginAt).format('YYYY-MM-DD HH:mm:ss')
    }))
    console.log(list)
    ctx.responseSuccess(list)
    await next()
  }
}
