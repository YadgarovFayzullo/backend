import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { File } from './entities/file.entity';

@Injectable()
export class FilesService {
  constructor(
    @InjectRepository(File)
    private fileRepository: Repository<File>,
  ) {}
  create(file: Express.Multer.File) {
    return { status: !!this.fileRepository.save(file) };
  }

  findAll() {
    return this.fileRepository.find({
      select: ['filename'],
    });
  }
}
