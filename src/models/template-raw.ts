import {
  Model,
  Optional,
  // HasManyGetAssociationsMixin,
  // HasManyHasAssociationMixin,
  // HasManyCountAssociationsMixin,
  // HasManyCreateAssociationMixin,
  // HasManyAddAssociationMixin
} from 'sequelize'
// import { Optional } from "sequelize/types";

export interface UserAttributes {
  id: number
  uid: string
  email: string |null
  password: string
  avator: string |null
  logindAt: Date |null
}

// Some attributes are optional in `User.build` and `User.create` calls
interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

export class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: number // Note that the `null assertion` `!` is required in strict mode.
  public uid!: string
  public email!: string | null // for nullable fields
  public password!: string
  public avator!: string | null // for nullable fields
  public logindAt!: Date | null // for nullable fields

  // timestamps!
  public readonly createdAt!: Date
  public readonly updatedAt!: Date

  // Since TS cannot determine model association at compile time
  // we have to declare them here purely virtually
  // these will not exist until `Model.init` was called.
  // public getProjects!: HasManyGetAssociationsMixin<Project> // Note the null assertions!
  // public addProject!: HasManyAddAssociationMixin<Project, number>
  // public hasProject!: HasManyHasAssociationMixin<Project, number>
  // public countProjects!: HasManyCountAssociationsMixin
  // public createProject!: HasManyCreateAssociationMixin<Project>

  // You can also pre-declare possible inclusions, these will only be populated if you
  // actively include a relation.
  // public readonly projects?: Project[] // Note this is optional since it's only populated when explicitly requested in code

  // public static associations: {
  //   projects: Association<User, Project>
  // }
}

export default User
