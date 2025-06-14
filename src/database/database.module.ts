import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      name: 'default',
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.getOrThrow('DB_HOST'),
        username: configService.getOrThrow('DB_USERNAME'),
        password: configService.getOrThrow('DB_PASSWORD'),
        port: configService.getOrThrow('DB_PORT'),
        database: configService.getOrThrow('DB_NAME'),
        autoLoadEntities: true,
        synchronize: true,
        migrationsRun: true,
        migrationsTableName: 'migrations',
        migrations: [
          /*...*/
        ],
        entities: [
          /*...*/
        ],
        logging: ['info', 'query', 'schema'],
        logger: 'simple-console',
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
