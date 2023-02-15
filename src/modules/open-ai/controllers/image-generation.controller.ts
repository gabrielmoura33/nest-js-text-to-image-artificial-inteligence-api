import { Body, Controller, Post } from '@nestjs/common';
import { ImageGenerarionProps } from '../interfaces/image-generation.interfaces';
import CreateStorageSingleImage from '../use-cases/create-storage-single-image';

@Controller('dall-e')
export class ImageGenerationController {
  constructor(
    private createStorageSingleImageUseCase: CreateStorageSingleImage,
  ) {}

  @Post('/create-storage-single-image')
  async createStorageSingleImage(@Body() data: ImageGenerarionProps) {
    return this.createStorageSingleImageUseCase.execute(data);
  }
}
