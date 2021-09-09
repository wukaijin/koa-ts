import { Rules } from 'async-validator';
import Router, { url } from 'koa-router'
import { createValidator } from '@/utils'
import { signinController, signupController } from '@/controllers/user'

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
  uid: {
    type: 'string',
    required: true,
    validator: (rule, value, callback) => {
      if(value.length < 6) return new Error("name'length must be granter than 6")
      return true
    }

  },
  email: {
    type: 'string',
    required: true,
    validator: (rule, value, callback) => {
      if(value.length < 6) return new Error("email'length must be granter than 6")
      return true
    }

  },
  password: {
    type: 'string',
    required: true,
    validator: (rule, value) => {
      if(value.length < 6) return new Error("password'length must be granter than 6")
      return true
    }
  },
}
const userValidator = createValidator(userRules)

userRouter.post('/signin', userValidator,  signinController)
userRouter.post('/signup', userValidator,  signupController)
