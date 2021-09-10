import { Sequelize } from 'sequelize'

const DBsequelize = new Sequelize('tencent', 'root', '123456', {
  host: '106.55.147.116',
  port: 3306,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  logging: console.log
})

export default DBsequelize
