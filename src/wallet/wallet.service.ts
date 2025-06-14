import { Injectable } from '@nestjs/common';
import { ChargesService } from '../charges/charges.service';

@Injectable()
export class WalletService {
  constructor(private chargesService: ChargesService) {}

  createWalletCharge() {
    return this.chargesService.createCharge({ amount: 100, currency: 'NGN', description: 'Charge from wallet' });
  }
}
