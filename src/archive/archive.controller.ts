import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';
import { ArchiveService } from './archive.service';
import { Archive } from './entities/archive.entity';
import { Public } from 'src/auth/utils';

@Controller('archive')
export class ArchiveController {
  constructor(private readonly archiveService: ArchiveService) {}

  @Post()
  create(@Body() archive: Archive) {
    return this.archiveService.create(archive);
  }

  @Get()
  @Public()
  findAll() {
    return this.archiveService.findAll();
  }

  @Get()
  @Public()
  findOne(@Query('id') id: string) {
    return this.archiveService.findOne(id);
  }

  @Patch()
  update(@Query('id') id: string, @Body() archive: Archive) {
    return this.archiveService.update(id, archive);
  }

  @Delete()
  remove(@Query('id') id: string) {
    return this.archiveService.remove(id);
  }

  @Get(':releaseYear')
  @Public()
  findByYear(@Query('releaseYear') releaseYear: number) {
    return this.archiveService.findByYear(releaseYear);
  }
}
