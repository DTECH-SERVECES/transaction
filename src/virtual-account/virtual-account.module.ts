import { Module } from '@nestjs/common';
import { VirtualAccountController } from './virtual-account.controller';
import { VirtualServiceService } from './virtual-service.service';
import { ChargesModule } from 'src/charges/charges.module';

@Module({
  imports: [ChargesModule],
  providers: [VirtualServiceService],
  controllers: [VirtualAccountController],
})
export class VirtualAccountModule {}
