import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Configuration, ImagesResponse, OpenAIApi } from 'openai';
import {
  ImageGenerarionProps,
  ImageGenerationService,
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
  async CreateImage(data: ImageGenerarionProps): Promise<ImagesResponse> {
    try {
      const response = await this.OpenAIApiClient.createImage(data);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }
  CreateImageEdit(): Promise<void> {
    throw new Error('Method not implemented.');
  }
  CreateImageVariation(): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
