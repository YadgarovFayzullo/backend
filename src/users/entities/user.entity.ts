import { Entity, Column, ObjectIdColumn, ObjectId, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class User {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  username: string;

  @Column()
  password: string;

  @PrimaryGeneratedColumn()
  userId: number;
}
