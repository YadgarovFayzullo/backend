import { Module } from '@nestjs/common';
import { ArchiveService } from './archive.service';
import { ArchiveController } from './archive.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Archive } from './entities/archive.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Archive])],
  controllers: [ArchiveController],
  providers: [ArchiveService],
})
export class ArchiveModule {}
