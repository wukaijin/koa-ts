import { Optional } from 'sequelize/types'
import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
  PrimaryKey,
  Unique
} from 'sequelize-typescript'

export interface UserAttributes {
  id: number
  uid: string
  email: string | null
  password: string
  avator: string | null
  logindAt: Date | null
}

// Some attributes are optional in `User.build` and `User.create` calls
interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

@Table({
  tableName: 'users',
  modelName: 'users',
  freezeTableName: true
})
export class User extends Model<User, UserCreationAttributes> {
  @PrimaryKey
  @Unique
  @Column
  id!: string

  @PrimaryKey
  @Unique
  @Column
  uid!: string

  @Column
  email!: string

  @Column
  password!: string

  @Column
  avator!: string

  @CreatedAt
  @Column
  createdAt!: Date

  @UpdatedAt
  @Column
  updatedAt!: Date

  @Column
  loginAt!: Date
}
