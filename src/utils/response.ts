import { Context } from 'koa'

export function responseError(ctx: Context, message: string, code: number = -1) {
  ctx.state = 404
  ctx.body = {
    code,
    msg: message
  }
}

export function responseSuccess(ctx: Context, data: any, message: string) {
  ctx.state = 200
  ctx.body = {
    code: 200,
    msg: message || 'ok',
    data
  }
}
