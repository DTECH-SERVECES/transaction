import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { ConfigsModule } from './configs/configs.module';
import { BullModule } from '@nestjs/bull';
import { ChargesModule } from './charges/charges.module';
import { WalletModule } from './wallet/wallet.module';
import { MetadataModule } from './metadata/metadata.module';
import { CardModule } from './card/card.module';
import { VirtualAccountModule } from './virtual-account/virtual-account.module';

@Module({
  exports: [],
  imports: [
    VirtualAccountModule,
    CardModule,
    ConfigsModule,
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    BullModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        redis: {
          host: configService.getOrThrow('REDIS_HOST'),
          port: parseInt(configService.getOrThrow('REDIS_PORT')),
          db: parseInt(configService.getOrThrow('REDIS_DATABASE')),
        },
        defaultJobOptions: {
          removeOnComplete: true,
          removeOnFail: true,
          attempts: 1,
          maxRetriesPerJob: 1,
          backoff: {
            type: 'exponential',
            delay: 1000,
          },
        },
      }),
      inject: [ConfigService],
    }),
    ChargesModule,
    WalletModule,
    MetadataModule,
  ],
  providers: [],
})
export class AppModule {}
