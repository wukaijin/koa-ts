import { Table, Column, Model, CreatedAt, UpdatedAt, PrimaryKey } from 'sequelize-typescript';

@Table({
  tableName: 'projects', modelName: 'projects', freezeTableName:true
})
export class User extends Model<User> {
  @Column
  @PrimaryKey
  uid!: string;

  @Column
  email!: string;

  @Column
  password!: string;

  @Column
  avator!: string;

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;

  @Column
  loginAt!: Date;
}