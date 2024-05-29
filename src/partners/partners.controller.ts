import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete, Query
} from "@nestjs/common";
import { PartnersService } from './partners.service';
import { Partner } from './entities/partner.entity';
import { Public } from "../auth/utils";

@Controller('partners')
export class PartnersController {
  constructor(private readonly partnersService: PartnersService) {}

  @Post()
  create(@Body() partner: Partner) {
    return this.partnersService.create(partner);
  }

  @Public()
  @Get()
  findAll() {
    return this.partnersService.findAll();
  }

  @Get()
  findOne(@Query('id') id: string) {
    return this.partnersService.findOne(id);
  }

  @Patch()
  update(@Query('id') id: string, @Body() partner: Partner) {
    return this.partnersService.update(id, partner);
  }

  @Delete()
  remove(@Query('id') id: string) {
    return this.partnersService.remove(id);
  }
}
