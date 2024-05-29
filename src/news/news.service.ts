import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { News } from './entities/news.entity';
import { ObjectId } from 'mongodb';

@Injectable()
export class NewsService {
  constructor(
    @InjectRepository(News)
    private newsRepository: Repository<News>,
  ) {}
  create(post: News) {
    return this.newsRepository.save(post);
  }

  findAll() {
    return this.newsRepository.find();
  }

  findOne(id: string) {
    return this.newsRepository.findOne({
      where: {
        _id: new ObjectId(id),
      },
    });
  }

  async update(id: string, post: News) {
    const result = await this.newsRepository.update(
      { _id: new ObjectId(id) },
      post,
    );
    return { status: result.affected == 1 };
  }

  async remove(id: string) {
    const result = await this.newsRepository.delete(new ObjectId(id));
    return { status: result.affected == 1 };
  }
}
