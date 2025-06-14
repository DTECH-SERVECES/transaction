import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { AbstractEntity } from 'src/database/abstract.entity';
import { ChargesEntity } from 'src/charges/entities/charges.entity';

@Entity('Metadata')
export class MetadataEntity extends AbstractEntity<MetadataEntity> {
  constructor(metadata: Partial<MetadataEntity>) {
    super(metadata);
    Object.assign(this, metadata);
  }

  @Column()
  name: string;

  @Column()
  value: string;

  @Column()
  charge_id: number;

  @ManyToOne(() => ChargesEntity, (charge: ChargesEntity) => charge.metadata)
  @JoinColumn({ name: 'charge_id', referencedColumnName: 'id' })
  charge: ChargesEntity;
}
