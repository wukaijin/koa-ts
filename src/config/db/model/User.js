import { DataTypes, Model } from 'sequelize'

class User extends Model {}

User.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV1
  },
  uid: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false
  },
  lastLoginTime: {
    type: DataTypes.DATE,
    defaultValue: null
  },
  incrementMe: {
    type: DataTypes.INTEGER,
    autoIncrement: true
  }
})
