import { AbstractEntity } from 'src/database/abstract.entity';
import { Column, Entity } from 'typeorm';

@Entity('Configs')
export class ConfigsEntity extends AbstractEntity<ConfigsEntity> {
  constructor(configs: Partial<ConfigsEntity>) {
    super(configs);
    Object.assign(this, ConfigsEntity);
  }

  @Column({})
  name: string;

  @Column()
  value: string;


}
