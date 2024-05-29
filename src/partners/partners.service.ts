import { Injectable } from '@nestjs/common';
import { Partner } from './entities/partner.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ObjectId } from 'mongodb';

@Injectable()
export class PartnersService {
  constructor(
    @InjectRepository(Partner)
    private partnerRepository: Repository<Partner>,
  ) {}
  create(partner: Partner) {
    return this.partnerRepository.save(partner);
  }

  findAll() {
    return this.partnerRepository.find();
  }

  findOne(id: string) {
    return this.partnerRepository.findOne({
      where: {
        _id: new ObjectId(id),
      },
    });
  }

  async update(id: string, partner: Partner) {
    const result = await this.partnerRepository.update(
      { _id: new ObjectId(id) },
      partner,
    );
    return { status: result.affected == 1 };
  }

  async remove(id: string) {
    const result = await this.partnerRepository.delete(new ObjectId(id));
    return { status: result.affected == 1 };
  }
}
