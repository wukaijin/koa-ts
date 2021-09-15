import { IKoaBodyOptions } from 'koa-body'
import Schema, { Rules } from 'async-validator'
import { Context, Next } from 'koa'
import { ParsedUrlQuery } from 'querystring'

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

function handleErrors(errors: any, ctx: Context) {
  if (errors && errors.length) {
    return ctx.reply.fail(errors[0].message)
  }
  return ctx.reply.fail(errors.message || '发生未知错误')
}

interface Map<T> {
  [key: string]: T
}
const reduceParams = (target: ParsedUrlQuery, rules: Rules) => {
  const result = {}
  Object.keys(rules).forEach(e => {
    result[e] = getValue(target, e)
  })
  return result
}

const getValue = <T extends Object, K extends keyof T>(
  o: T,
  key: K
): T[K] | '' => {
  return o[key] || ''
}
const getParams = (ctx: Context, rule: Rules) => {
  reduceParams
  switch (ctx.method) {
    case 'GET':
      return reduceParams(ctx.query, rule)
    case 'POST':
      return reduceParams(ctx.request.body, rule)
    default:
      return {}
  }
}

export function createValidator(descriptor: Rules) {
  const validator = new Schema(descriptor)
  return async function (ctx: Context, next: Next) {
    try {
      console.log('getParams(ctx, descriptor)', getParams(ctx, descriptor))
      const r = await validator.validate(getParams(ctx, descriptor))
      console.log('createValidator await', r)
      await next()
    } catch (err: any) {
      const { errors } = err
      if (errors) return handleErrors(errors, ctx)
      return handleErrors(err, ctx)
    }
  }
}
