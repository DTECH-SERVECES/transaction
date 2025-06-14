import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardController } from './card.controller';
import { CardService } from './card.service';
import { ChargesModule } from 'src/charges/charges.module';

@Module({
  imports: [ChargesModule],
  providers: [CardService],
  controllers: [CardController],
})
export class CardModule {}
