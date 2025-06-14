import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChargesEntity } from './entities/charges.entity';
import { ChargesService } from './charges.service';

@Module({
  imports: [TypeOrmModule.forFeature([ChargesEntity])],
  providers: [ChargesService],
  exports: [ChargesService,],
})
export class ChargesModule {}
