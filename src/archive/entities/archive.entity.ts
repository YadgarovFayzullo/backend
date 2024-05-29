import { Entity, Column, ObjectIdColumn, ObjectId } from 'typeorm';
@Entity()
export class Archive {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  filePath: string;

  @Column()
  releaseYear: number;

  @Column()
  name: string;
}
