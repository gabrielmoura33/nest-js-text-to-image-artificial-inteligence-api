export abstract class StorageService {
  abstract saveFile(file: Buffer, filename: string): string;
  abstract deleteFile(file: string): Promise<void>;
}
