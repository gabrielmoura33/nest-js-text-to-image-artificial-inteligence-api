export abstract class ImageGenerationService {
  abstract generateImage(): Promise<void>;
  abstract editImage(): Promise<void>;
  abstract generateVariation(): Promise<void>;
}
