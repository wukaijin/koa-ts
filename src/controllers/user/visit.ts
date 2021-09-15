import { logger } from '@/utils'
import { Context, Next } from 'koa'

export const visit = async (ctx: Context, next: Next) => {
    ctx.session!.visit = true
    logger.info('ctx.session', ctx.session)
    ctx.reply.success(`ojbk`)
    await next()
}
