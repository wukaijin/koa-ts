import { Rules } from 'async-validator';
import Router, { url } from 'koa-router'
import { createValidator } from '../utils/validate'
import moment from 'moment'

export const userPath = '/user'
export const userRouter = new Router()

// function mockTime(timer: number = 3000) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve(1)
//     }, timer)
//   })
// }
const userRules:Rules = {
  name: {
    type: 'string',
    required: true,
    validator: (rule, value, callback) => {
      if(value === 'muji') return true
      return new Error('name must be muji')
    }

  },
  password: {
    type: 'string',
    required: true,
    validator: (rule, value) => value === 'muji'
  },
}
const userValidator = createValidator(userRules)

userRouter.post('/signup', userValidator,  async (ctx, next) => {
// userRouter.post('/signup',  async (ctx, next) => {
  const { request } = ctx
  const { id, password } = request.body
  // await mockTime(2000)
  userValidator
  ctx.body = `ojbk  ${moment().format('YYYY-MM-DD HH:MM:ss')}
  ${id}
  ${password}
  `
  next()
})
