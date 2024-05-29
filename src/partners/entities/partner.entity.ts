import { Entity, Column, ObjectIdColumn, ObjectId } from 'typeorm';
@Entity()
export class Partner {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  imagePath: string;
}
