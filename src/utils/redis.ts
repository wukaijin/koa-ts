import Redis from 'redis'
import { CONFIG } from '@/config/redis'
import { NODE_ENV } from '@/config'
import logger from './logger'

const CUREENT_CONFIG = CONFIG[NODE_ENV]

const client = Redis.createClient(CUREENT_CONFIG)

client.on('error', err => {
  logger.error(err)
})
client.on('ready', () => {
  logger.success('Reids is ready!')
})

export default client
