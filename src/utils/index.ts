import crypto from 'crypto'

export { createValidator } from './validate'
export { responseError, responseSuccess } from './response'

export const toMd5 = (str: string | string[] | undefined) => {
  if (!str) return ''
  if (Array.isArray(str)) str = str[0]
  const md = crypto.createHash('md5').update(str)
  return md.digest('hex')
}
