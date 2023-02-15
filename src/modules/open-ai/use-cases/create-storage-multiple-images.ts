import { Injectable } from '@nestjs/common';
import { StorageService } from 'src/shared/modules/storage/interfaces/storage.interfaces';
import {
  ImageGenerarionProps,
  ImageGenerationService,
} from '../interfaces/image-generation.interfaces';

@Injectable()
export class CreateStorageMultipleImages {
  constructor(
    private readonly imageGenerationService: ImageGenerationService,
    private readonly storageService: StorageService,
  ) {}

  async execute(data: ImageGenerarionProps) {
    throw new Error('Method not implemented');
  }
}
