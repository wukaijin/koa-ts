import { Rules } from 'async-validator';
import Router, { url } from 'koa-router'
import { createValidator } from '../utils'
import { signinController, signupController } from '../controllers/user'

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

userRouter.post('/signin', userValidator,  signinController)
userRouter.post('/signup', userValidator,  signupController)
