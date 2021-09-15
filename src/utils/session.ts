import Koa from 'koa'
import KoaSession from 'koa-session'
import { SESSION_KEY, CONFIG } from '@/config/session'

export const useSession = (app: Koa) => {
  if (Array.isArray(app.keys)) {
    app.keys = [SESSION_KEY, ...app.keys]
  } else {
    app.keys = [SESSION_KEY]
  }
  return KoaSession(CONFIG, app)
}
