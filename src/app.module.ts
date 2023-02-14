import { Module } from '@nestjs/common';

import { OpenAIModule } from './modules/openAI/open-ai.module';

@Module({
  imports: [OpenAIModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
