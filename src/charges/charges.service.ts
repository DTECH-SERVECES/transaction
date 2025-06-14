import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ChargesEntity } from './entities/charges.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ChargesService {
  constructor(@InjectRepository(ChargesEntity) private chargesRepository: Repository<ChargesEntity>) {}

  createCharge(chargeData: Partial<ChargesEntity>): Promise<ChargesEntity> {
    const charge = this.chargesRepository.create(chargeData);
    return this.chargesRepository.save(charge);
  }

  findOneCharge(id: number): Promise<ChargesEntity> {
    return this.chargesRepository.findOne({ where: { id } });
  }
  findAllCharges(): Promise<ChargesEntity[]> {
    return this.chargesRepository.find({ order: { id: 'DESC' } });
  }
  updateCharge(id: number, chargeData: Partial<ChargesEntity>): Promise<ChargesEntity> {
    return this.chargesRepository.save({ ...chargeData, id });
  }
  deleteCharge(id: number): Promise<undefined> {
    return this.chargesRepository.delete(id).then(() => undefined);
  }
  findChargesByStatus(status: string): Promise<ChargesEntity[]> {
    return this.chargesRepository.find({ where: { status } });
  }
  findChargesByCurrency(currency: string): Promise<ChargesEntity[]> {
    return this.chargesRepository.find({ where: { currency } });
  }
}
