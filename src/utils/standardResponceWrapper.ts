import { Context } from 'koa'

export function responceError(ctx: Context, message: string) {
  ctx.state = 404
  ctx.body = {
    code: -1,
    msg: message
  }
}

export function responceSuccess(ctx: Context, data: any) {
  ctx.state = 200
  ctx.body = {
    code: 200,
    msg: null,
    data
  }
}
