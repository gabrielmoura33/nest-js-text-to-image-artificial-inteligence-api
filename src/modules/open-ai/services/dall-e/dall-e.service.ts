import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Configuration, ImagesResponse, OpenAIApi } from 'openai';
import {
  ImageGenerarionProps,
  ImageGenerationService,
  ImageVariationProps,
} from '../../interfaces/image-generation.interfaces';
@Injectable()
export class DallEService implements ImageGenerationService {
  private readonly openAiApiKey: string;
  private readonly OpenAIApiClient: OpenAIApi;
  constructor(private readonly configService: ConfigService) {
    this.openAiApiKey = this.configService.get<string>('OPEN_AI_AUTH_KEY');
    this.OpenAIApiClient = new OpenAIApi(
      new Configuration({
        apiKey: this.openAiApiKey,
      }),
    );
  }

  public async CreateImage(
    data: ImageGenerarionProps,
  ): Promise<ImagesResponse> {
    try {
      const response = await this.OpenAIApiClient.createImage({
        ...data,
        n: data.n || 1,
      });
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  public async CreateImageVariation({
    image,
    n,
    size,
  }: ImageVariationProps): Promise<ImagesResponse> {
    try {
      const response = await this.OpenAIApiClient.createImageVariation(
        image,
        n || 1,
        size,
      );

      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  CreateImageEdit(): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
