// import { SequelizeOptions } from 'sequelize-typescript'

// const config: Record<string, SequelizeOptions> = 
// export default config

module.exports = {
  development: {
    username: 'root',
    password: '123456',
    database: 'database_development',
    host: '127.0.0.1',
    dialect: 'mysql',
    logging: console.log,
  },
  production: {
    username: 'root',
    password: '123456',
    database: 'tencent',
    host: '106.55.147.116',
    dialect: 'mysql',
    logging: console.log,
    port: 3306,
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
  }
}