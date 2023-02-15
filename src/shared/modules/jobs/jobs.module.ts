import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: process.env.REDIS_HOST,
        port: +process.env.REDIS_PORT,
      },
      settings: {
        stalledInterval: 0,
      },
    }),
  ],
})
export class JobsModule {}
