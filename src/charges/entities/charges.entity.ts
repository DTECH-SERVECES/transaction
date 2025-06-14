import { AbstractEntity } from 'src/database/abstract.entity';
import { Entity, Column, OneToMany, JoinColumn } from 'typeorm';
import { MetadataEntity } from 'src/metadata/entities/metadata.entity';

@Entity('Charges')
export class ChargesEntity extends AbstractEntity<ChargesEntity> {
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  amount: number;

  @Column({})
  currency: string;

  @Column({})
  status: string;

  @Column()
  description: string;

  constructor(charge: Partial<ChargesEntity>) {
    super(charge);
    Object.assign(this, charge);
  }

  @OneToMany(() => MetadataEntity, (metadata: MetadataEntity) => metadata.charge)
  @JoinColumn({ name: 'charge_id', referencedColumnName: 'id' })
  metadata: MetadataEntity[];
}
