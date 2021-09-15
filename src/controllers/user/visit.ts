import { Context, Next } from 'koa'

export const visit = async (ctx: Context, next: Next) => {
    debugger
    ctx.session!.visit = true
    ctx.reply.success(`ojbk`)
    await next()
}
