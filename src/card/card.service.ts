import { Injectable } from '@nestjs/common';
import { ChargesService } from '../charges/charges.service';

@Injectable()
export class CardService {
  constructor(private chargesService: ChargesService) {}

  createChargeFromCard() {
    return this.chargesService.createCharge({ amount: 100, currency: 'NGN', description: 'Charge from card' });
  }
}
