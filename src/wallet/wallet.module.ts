import { Module } from '@nestjs/common';
import { WalletController } from './wallet.controller';
import { WalletService } from './wallet.service';
import { ChargesModule } from 'src/charges/charges.module';

@Module({
  imports: [ChargesModule],
  providers: [WalletService],
  controllers: [WalletController],
})
export class WalletModule {}
