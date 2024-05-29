import { Entity, Column, ObjectIdColumn, ObjectId } from 'typeorm';
@Entity()
export class News {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  title: string;

  @Column()
  text: string;

  @Column()
  imagePath: string;

  @Column('timestamptz')
  date: Date;

  @Column('int')
  viewsCounter: number;
}
