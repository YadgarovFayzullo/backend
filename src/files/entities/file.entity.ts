import { Entity, Column, ObjectIdColumn, ObjectId } from 'typeorm';
@Entity()
export class File {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  destination: string;

  @Column()
  mimetype: string;

  @Column()
  originalname: string;

  @Column()
  encoding: string;

  @Column()
  path: string;

  @Column()
  fieldname: string;

  @Column()
  size: number;

  @Column()
  filename: string;
}
