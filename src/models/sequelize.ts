import { Sequelize, SequelizeOptions } from 'sequelize-typescript'
import { NODE_ENV } from '@/config'
import * as models from './index'

const databaseConfig = require('@/config/database')
const mysqlConfig: SequelizeOptions = databaseConfig[NODE_ENV]

const sequelize = new Sequelize(mysqlConfig)

sequelize.authenticate()

sequelize.addModels([models.User])
