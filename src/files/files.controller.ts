import {
  Controller,
  Get,
  Post,
  UseInterceptors,
  UploadedFile,
  Res,
  Param,
} from '@nestjs/common';
import { FilesService } from './files.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { diskStorage } from 'multer';
import { createReadStream } from 'fs';
import { join } from 'path';
import { StreamableFile } from '@nestjs/common';
import { Public } from 'src/auth/utils';
import { fileName } from './files.utils';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Public()
  @Get('files/:fileName')
  async getFile(
    @Param('fileName') fileName: string,
    @Res({ passthrough: true }) res,
  ): Promise<StreamableFile> {
    const filePath = join(process.cwd(), 'uploads', `${fileName}`);
    const fileStream = createReadStream(filePath);

    const ext = fileName.split('.').pop();
    let contentType = 'application/octet-stream';

    switch (ext) {
      case 'pdf':
        contentType = 'application/pdf';
        break;
      case 'png':
        contentType = 'image/png';
        break;
      case 'jpeg':
      case 'jpg':
        contentType = 'image/jpeg';
        break;
    }

    res.set({
      'Content-Type': contentType,
      'Content-Disposition': `attachment; filename=${fileName}`,
    });

    return new StreamableFile(fileStream);
  }

  @Post('uploads')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: fileName,
      }),
    }),
  )
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    await this.filesService.create(file);
    return { message: 'File uploaded successfully', fileName: file.filename };
  }

  @Public()
  @Get('uploads')
  findAll() {
    return this.filesService.findAll();
  }
}
