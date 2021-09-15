import { Context } from 'koa'

const CONTEXT_REPLY = Symbol('CONTEXT_REPLY')
const _CONTEXT_REPLY = Symbol('_CONTEXT_REPLY')
// interface IResponseOptions {
//   message?: string
//   code?: number
// }

// export function responseError(
//   this: Context,
//   message: string,
//   options: IResponseOptions = {}
// ) {
//   this.status = 404
//   this.body = {
//     code: options.code || 404,
//     msg: message
//   }
// }

// export function responseSuccess(
//   this: Context,
//   data: any,
//   options: IResponseOptions = {}
// ) {
//   this.status = 200
//   this.body = {
//     code: options.code || 200,
//     msg: options.message || 'ok',
//     data
//   }
// }

interface IReplyConfig {
  message: string
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
      message: 'ojbk',
      code: {
        success: 200,
        fail: -1,
        error: -1
      }
    }
  }
  success(data: any) {
    this.ctx.status = 200
    this.ctx.body = {
      code: this.config.code.success,
      msg: this.config.message,
      data
    }
  }
  fail(message: string, code: number) {
    // console.log(this.ctx)
    this.ctx.status = 200
    this.ctx.body = {
      code: code || this.config.code.error,
      msg: message || this.config.message,
      data: null
    }
  }
  error(message: string) {
    // console.log(this.ctx)
    this.ctx.status = 404
    this.ctx.body = {
      code: this.config.code.error,
      msg: message,
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

// export function extendContextWithReply(ctx: Context) {
//   const reply = new ContextReply(ctx)
//   // ctx.reply = new ContextReply(ctx)
//   Object.defineProperties(ctx, {
//     reply: {
//       get() {
//         return reply
//       },
//       set() {
//         throw new Error('Error')
//       },
//       configurable: true
//     },
//     replyConfig: {
//       get() {
//         return reply.config
//       }
//     }
//   })
// }
