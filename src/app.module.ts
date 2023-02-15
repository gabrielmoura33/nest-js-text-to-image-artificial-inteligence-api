import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import * as path from 'path';
import { OpenAIModule } from './modules/open-ai/open-ai.module';
import { JobsModule } from './shared/modules/jobs/jobs.module';
import { StorageModule } from './shared/modules/storage/storage.module';

@Module({
  imports: [
    OpenAIModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: path.resolve(
        __dirname,
        'environments',
        `${process.env.NODE_ENV || 'development'}.env`,
      ),
    }),
    JobsModule,
    StorageModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
