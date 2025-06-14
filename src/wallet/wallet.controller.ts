import { Controller, Post, Get, Put } from '@nestjs/common';
import { WalletService } from './wallet.service';

@Controller('rest/wallet')
export class WalletController {
  constructor(private walletService: WalletService) {}

  @Post()
  create() {
    // return this.walletService.createWallet();
  }

  @Get()
  findAll() {
    // return this.walletService.findAllWallets();
  }
  @Put(':id')
  update() {
    // return this.walletService.updateWallet();
  }

  findOne() {
    return 'This action returns a wallet with the given id';
  }
}
