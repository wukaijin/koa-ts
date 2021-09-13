import { WhereOptions } from 'sequelize';
// import { IUser } from './types.d';
import { User, UserAttributes } from '@/models'
// import { Optional } from 'sequelize/types'

// interface UserCreationAttributes extends Optional<UserAttributes, 'uid'> {}
// interface UserInstance extends Model<UserAttributes, UserCreationAttributes>, UserAttributes {}

export class UserService {
  public static async build(data: UserAttributes): Promise<User | null> {
    const users = await User.build(data)
    return users
  }
  public static async getAll(): Promise<User[] | null> {
    const users = await User.findAll({})
    return users
  }
  public static async get(query: Record<string, unknown>): Promise<User | null> {
    const users = await User.findOne(query)
    return users
  }
  public static async set(data: UserAttributes): Promise<User | null> {
    const users = await User.create(data)
    return users
  }
  public static async find(data: WhereOptions<UserAttributes>): Promise<User | null> {
    const users = await User.findOne({
      where: data
    })
    return users
  }
}
