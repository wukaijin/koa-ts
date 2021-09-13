import { Rules } from 'async-validator'
import Router from 'koa-router'
import { createValidator } from '@/utils'
import { isRegistController, signinController, signupController } from '@/controllers/user'

export const userPath = '/user'
export const userRouter = new Router()

const userRules: Rules = {
  uid: [
    {
      type: 'string',
      required: true,
    },
  ],
  email: {
    type: 'string',
    required: true,
    validator: (rule, value, callback) => {
      if (value.length < 6) return new Error("email'length must be granter than 6")
      return true
    }
  },
  password: [
    {
      type: 'string',
      required: true,
    },
    {
      validator: (rule, value) => {
        if (value.length < 6) return new Error("password'length must be granter than 6")
        return true
      }
    }
  ]
}

const userSigninRule: Pick<typeof userRules, 'uid' | 'password'> = {
  uid: userRules.uid,
  password: userRules.password
}
const userValidator = createValidator(userRules)
const userSigninValidator = createValidator(userSigninRule)

userRouter.get('/isRegist', isRegistController)
userRouter.post('/signin', userSigninValidator, signinController)
userRouter.post('/signup', userValidator, signupController)
// userRouter.post('/signup', userValidator)
// userRouter.post('/signup',  signupController)
