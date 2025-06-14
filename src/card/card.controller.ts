import { Controller } from '@nestjs/common';
import { CardService } from './card.service';

@Controller('rest/card')
export class CardController {
  constructor(private service: CardService) {}

  createCardService() {
    return this.service.createChargeFromCard();
  }
}
