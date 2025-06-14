import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ConfigsEntity } from './entities/configs.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ConfigsService {
  constructor(
    @InjectRepository(ConfigsEntity)
    private configEntity: Repository<ConfigsEntity>,
  ) {}

  findByName(name: string) {
    return this.configEntity.findOne({ where: { name } });
  }
}
