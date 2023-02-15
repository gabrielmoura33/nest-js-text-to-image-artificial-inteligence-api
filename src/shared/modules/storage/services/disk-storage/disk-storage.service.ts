import { Injectable } from '@nestjs/common';
import fs from 'fs';
import path from 'path';
import { StorageService } from '../../interfaces/storage.interfaces';

@Injectable()
export default class DiskStorageService implements StorageService {
  saveFile(file: Buffer, filename: string): string {
    const filePath = path.resolve(
      __dirname,
      '..',
      '..',
      '..',
      '..',
      '..',
      'storage',
      filename,
    );
    fs.writeFileSync(filePath, file);

    return filePath;
  }
  deleteFile(file: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
