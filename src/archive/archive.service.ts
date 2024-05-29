import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Archive } from './entities/archive.entity';
import { ObjectId } from 'mongodb';

@Injectable()
export class ArchiveService {
  constructor(
    @InjectRepository(Archive)
    private archiveRepository: Repository<Archive>,
  ) {}
  create(archive: Archive) {
    return this.archiveRepository.save(archive);
  }

  findAll() {
    return this.archiveRepository.find();
  }

  findOne(id: string) {
    return this.archiveRepository.findOne({
      where: {
        _id: new ObjectId(id),
      },
    });
  }

  async update(id: string, archive: Archive) {
    const result = await this.archiveRepository.update(
      { _id: new ObjectId(id) },
      archive,
    );
    return { status: result.affected == 1 };
  }

  async remove(id: string) {
    const result = await this.archiveRepository.delete(new ObjectId(id));
    return { status: result.affected == 1 };
  }

  findByYear(releaseYear: number) {
    return this.archiveRepository.find({
      where: {
        releaseYear: releaseYear,
      },
    });
  }
}
