import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import path from 'path';
import { OpenAIModule } from './modules/open-ai/open-ai.module';

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
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
