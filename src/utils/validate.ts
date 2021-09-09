import Schema, { Rules, ValidateError, ValidateFieldsError, Values } from 'async-validator'
import { Context, Next } from 'koa'
import { responseError } from './standardResponceWrapper'

// const descriptor: Rules = {
//   name: {
//     type: 'string',
//     required: true,
//     validator: (rule, value) => value === 'muji'
//   },
//   age: {
//     type: 'number',
//     asyncValidator: (rule, value) => {
//       return new Promise((resolve, reject) => {
//         if (value < 18) {
//           reject('too young') // reject with error message
//         } else {
//           resolve()
//         }
//       })
//     }
//   }
// }

function handleErrors(errors: any, fields: any, ctx: Context) {
  if (errors && errors.length) {
    responseError(ctx, errors[0].message)
  }
}

const getParams = (ctx: Context) => {
  switch (ctx.method) {
    case 'GET':
      return ctx.query
    case 'POST':
      return ctx.request.body
    default:
      return {}
  }
}

export function createValidator(descriptor: Rules) {
  const validator = new Schema(descriptor)
  return async function (ctx: Context, next: Next) {
    try {
      await validator.validate(getParams(ctx))
      console.log('await')
      next()
    } catch ({ errors, fields }) {
      // const { errors, fields } = err
      console.log('catch', { errors, fields })
      return handleErrors(errors, fields, ctx)
    }
  }
}
