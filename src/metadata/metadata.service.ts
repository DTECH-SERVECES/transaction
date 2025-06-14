import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MetadataEntity } from './entities/metadata.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MetadataService {
  constructor(@InjectRepository(MetadataEntity) private metadata: Repository<MetadataEntity>) {}
}
