import { Model } from 'sequelize-typescript';
import { Model } from 'sequelize';
import { IUser } from './types.d';
import { User } from '@/models'
import { Optional } from 'sequelize/types';

export interface UserAttributes {
  uid: string,
  password: string
}

interface UserCreationAttributes extends Optional<UserAttributes, 'uid'> {}
interface UserInstance extends Model<UserAttributes, UserCreationAttributes>, UserAttributes {}


export class UserService {
  public static async build(data: UserCreationAttributes): Promise<User | UserCreationAttributes| null> {
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
  public static async set(data: Optional<User>): Promise<User | null> {
    const users = await User.create(data)
    return users
  }
}
