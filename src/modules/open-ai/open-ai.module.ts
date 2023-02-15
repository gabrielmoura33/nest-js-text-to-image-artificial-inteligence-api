import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { StorageModule } from 'src/shared/modules/storage/storage.module';
import { DallEController } from './controllers/dall-e.controller';
import { ImageGenerationService } from './interfaces/image-generation.interfaces';
import { DallEService } from './services/dall-e/dall-e.service';
import { CreateStorageMultipleImages } from './use-cases/create-storage-multiple-images';
import CreateStorageSingleImage from './use-cases/create-storage-single-image';

@Module({
  providers: [
    {
      provide: ImageGenerationService,
      useClass: DallEService,
    },
    CreateStorageSingleImage,
    CreateStorageMultipleImages,
  ],
  imports: [HttpModule, StorageModule],
  controllers: [DallEController],
})
export class OpenAIModule {}
