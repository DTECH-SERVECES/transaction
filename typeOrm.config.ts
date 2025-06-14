import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { DataSource } from 'typeorm';

config();
const configService = new ConfigService();

export default new DataSource({
  type: 'mysql',
  host: configService.getOrThrow('DB_HOST'),
  username: configService.getOrThrow('DB_USERNAME'),
  password: configService.getOrThrow('DB_PASSWORD'),
  port: +configService.getOrThrow('DB_PORT'),
  database: configService.getOrThrow('DB_NAME'),
  entities: [],
  migrations: ['typeorm_migrations/**'],
  synchronize: false,
});
