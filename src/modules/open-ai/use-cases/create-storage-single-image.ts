import { Injectable } from '@nestjs/common';
import { StorageService } from 'src/shared/modules/storage/interfaces/storage.interfaces';
import {
  ImageGenerarionProps,
  ImageGenerationService,
} from '../interfaces/image-generation.interfaces';

@Injectable()
export default class CreateStorageSingleImage {
  constructor(
    private readonly imageGenerationService: ImageGenerationService,
    private readonly storageService: StorageService,
  ) {}

  async execute(data: ImageGenerarionProps) {
    const { data: openAiResponse } =
      await this.imageGenerationService.CreateImage(data);
    const imgResult = await fetch(openAiResponse[0].url);
    if (!imgResult.ok)
      throw new Error('Error while fetching image from OpenAI');

    const blob = await imgResult.blob();
    const buffer = Buffer.from(await blob.arrayBuffer());

    const path = this.storageService.saveFile(buffer, `${Date.now()}.png`);
    return { path };
  }
}
