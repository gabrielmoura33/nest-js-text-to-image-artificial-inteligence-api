export abstract class ImageGenerationService {
  abstract generateSingleImage(): Promise<void>;
  abstract editSingleImage(): Promise<void>;
  abstract generateSingleVariation(): Promise<void>;
  abstract generateMultipleImages(): Promise<void>;
  abstract editMultipleImages(): Promise<void>;
  abstract generateMultipleVariations(): Promise<void>;
}
