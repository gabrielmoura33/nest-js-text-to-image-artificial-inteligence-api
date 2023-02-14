import { Module } from '@nestjs/common';
import { DallEService } from './services/dall-e/dall-e.service';

@Module({
  providers: [DallEService],
  imports: [],
})
export class OpenAIModule {}
