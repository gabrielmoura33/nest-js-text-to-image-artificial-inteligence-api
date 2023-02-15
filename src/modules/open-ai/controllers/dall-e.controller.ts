import { Body, Controller, Post } from '@nestjs/common';
import { ImageGenerarionProps } from '../interfaces/image-generation.interfaces';
import { CreateStorageMultipleImages } from '../use-cases/create-storage-multiple-images';
import CreateStorageSingleImage from '../use-cases/create-storage-single-image';

@Controller('dall-e')
export class DallEController {
  constructor(
    private createStorageSingleImageUseCase: CreateStorageSingleImage,
    private createStorageMultipleImageUseCase: CreateStorageMultipleImages,
  ) {}

  @Post('/create-storage-single-image')
  async createStorageSingleImage(
    @Body() { prompt, size }: ImageGenerarionProps,
  ) {
    return this.createStorageSingleImageUseCase.execute({
      prompt,
      size,
      n: 1,
    });
  }

  @Post('/create-storage-multiple-images')
  async createStorageMultipleImages(@Body() data: ImageGenerarionProps) {
    return this.createStorageMultipleImageUseCase.execute(data);
  }
}
