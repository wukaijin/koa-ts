import crypto from 'crypto'

export { createValidator } from './validate'
export { extendContextWithReply } from './reply'

export const toMd5 = (str: string | string[] | undefined) => {
  if (!str) return ''
  if (Array.isArray(str)) str = str[0]
  const md = crypto.createHash('md5').update(str)
  return md.digest('hex')
}
