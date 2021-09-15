import { Context } from 'koa'

declare module 'koa' {
  interface ExtendableContext {
    reply: ContextReply
  }
}

const CONTEXT_REPLY = Symbol('CONTEXT_REPLY')
const _CONTEXT_REPLY = Symbol('_CONTEXT_REPLY')

interface IReplyConfig {
  message: {
    success: string
    fail: string
    error: string
  }
  code: {
    success: number
    fail: number
    error: number
  }
}

class ContextReply {
  public ctx: Context
  public config: IReplyConfig
  constructor(ctx: Context) {
    this.ctx = ctx
    this.config = {
      message: {
        success: 'ojbk',
        fail: 'fail',
        error: 'error'
      },
      code: {
        success: 200,
        fail: -1,
        error: -1
      }
    }
  }
  success(data?: any) {
    this.ctx.status = 200
    this.ctx.body = {
      code: this.config.code.success,
      message: this.config.message.success,
      data: data || null
    }
  }
  fail(message: string, code?: number) {
    // console.log(this.ctx)
    this.ctx.status = 200
    this.ctx.body = {
      code: code || this.config.code.fail,
      message: message || this.config.message.fail,
      data: null
    }
  }
  error(message: string, code?: number) {
    // console.log(this.ctx)
    this.ctx.status = 404
    this.ctx.body = {
      code: code || this.config.code.error,
      message: message || this.config.code.error,
      data: null
    }
  }
}

export function extendContextWithReply(ctx: Context) {
  Object.defineProperties(ctx, {
    [CONTEXT_REPLY]: {
      get() {
        if (!this[_CONTEXT_REPLY]) {
          this[_CONTEXT_REPLY] = new ContextReply(this)
        }

        return this[_CONTEXT_REPLY]
      }
    },
    reply: {
      get() {
        return this[CONTEXT_REPLY]
      },
      set() {
        throw new Error('Error')
      },
      configurable: false,
      enumerable: false
    },
    replyConfig: {
      get() {
        return this[CONTEXT_REPLY].config
      }
    }
  })
}
