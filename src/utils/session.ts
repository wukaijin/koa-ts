import { promisify } from 'util'
import Koa from 'koa'
import KoaSession, { Session } from 'koa-session'
import { SESSION_KEY, CONFIG } from '@/config/session'
import redis from './redis'

// const mergeStoreCOnfig = (config) => {

// }
// type Values = Record<string, unknown>

const getAsync = promisify(redis.hgetall).bind(redis)
const setAsync = promisify(redis.hmset).bind(redis)

export const useSession = (app: Koa) => {
  if (Array.isArray(app.keys)) {
    app.keys = [SESSION_KEY, ...app.keys]
  } else {
    app.keys = [SESSION_KEY]
  }
  const store = {
    async get(key: string, maxAge: number) {
      console.log('session get value from redis.store setp 1:', key)
      const value = await getAsync(key)
      console.log('session get value from redis.store setp 2:', value)
      return value
    },
    async set(key: string, value: Session, maxAge: number) {
      console.log('session set value from redis.store setp 1:', key, value)
      // redis.hmset(key, value, function () {
      //   console.log('session set value from redis.store setp 2:', key, value)
      // })
      // @ts-ignore
      await setAsync(key, value)
      console.log('session set value from redis.store setp 2:', key, value)
      return value
    },
    async destroy(key: string) {
      redis.hdel(key)
      console.log('session redis store delete value', key)
    }
  }
  return app.use(KoaSession(Object.assign({}, CONFIG, { store }), app))
}
