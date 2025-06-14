import { Injectable } from '@nestjs/common';
import { ChargesService } from 'src/charges/charges.service';

@Injectable()
export class VirtualServiceService {
  constructor(private chargesService: ChargesService) {}
}
