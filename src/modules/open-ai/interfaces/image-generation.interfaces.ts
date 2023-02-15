import { CreateImageRequestSizeEnum, ImagesResponse } from 'openai';

export interface ImageGenerarionProps {
  prompt: string;
  n?: number;
  size: CreateImageRequestSizeEnum;
}
export interface ImageVariationProps {
  image: File;
  n?: number;
  size: CreateImageRequestSizeEnum;
}
export abstract class ImageGenerationService {
  abstract CreateImage(data: ImageGenerarionProps): Promise<ImagesResponse>;
  abstract CreateImageVariation(
    data: ImageVariationProps,
  ): Promise<ImagesResponse>;
  abstract CreateImageEdit(): Promise<void>;
}
