import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigsEntity } from './entities/configs.entity';
import { ConfigsService } from './configs.service';

@Module({
  imports: [TypeOrmModule.forFeature([ConfigsEntity])],
  providers: [ConfigsService],
  controllers: [],
  exports: [ConfigsService],
})
export class ConfigsModule {}
