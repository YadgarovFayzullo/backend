import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Query,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { NewsService } from './news.service';
import { News } from './entities/news.entity';
import { Public } from '../auth/utils';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Post()
  @Public()
  @UseInterceptors(FileInterceptor('imagePath'))
  async create(@Body() post: News, @UploadedFile() file: Express.Multer.File) {
    if (file) {
      post.imagePath = file.filename;
    }
    const createdPost = await this.newsService.create(post);
    return createdPost;
  }

  @Get()
  @Public()
  findAll() {
    return this.newsService.findAll();
  }

  @Get()
  findOne(@Query('id') id: string) {
    return this.newsService.findOne(id);
  }

  @Patch()
  update(@Query('id') id: string, @Body() post: News) {
    return this.newsService.update(id, post);
  }

  @Delete()
  remove(@Query('id') id: string) {
    return this.newsService.remove(id);
  }
}
