import { Context } from 'koa'

interface IResponseOptions {
  message?: string
  code?: number
}

export function responseError(
  this: Context,
  message: string,
  options: IResponseOptions = {}
) {
  this.status = 404
  this.body = {
    code: options.code || 404,
    msg: message
  }
}

export function responseSuccess(
  this: Context,
  data: any,
  options: IResponseOptions = {}
) {
  this.status = 200
  this.body = {
    code: options.code || 200,
    msg: options.message || 'ok',
    data
  }
}
