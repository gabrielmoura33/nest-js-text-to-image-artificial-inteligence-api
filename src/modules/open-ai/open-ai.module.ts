import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { StorageModule } from 'src/shared/modules/storage/storage.module';
import { ImageGenerationController } from './controllers/image-generation.controller';
import { ImageGenerationService } from './interfaces/image-generation.interfaces';
import { DallEService } from './services/dall-e/dall-e.service';
import CreateStorageSingleImage from './use-cases/create-storage-single-image';

@Module({
  providers: [
    {
      provide: ImageGenerationService,
      useClass: DallEService,
    },
    CreateStorageSingleImage,
  ],
  imports: [HttpModule, StorageModule],
  controllers: [ImageGenerationController],
})
export class OpenAIModule {}
