import { Module } from '@nestjs/common';
import { StorageService } from './interfaces/storage.interfaces';
import DiskStorageService from './services/disk-storage/disk-storage.service';

@Module({
  providers: [
    {
      provide: StorageService,
      useClass: DiskStorageService,
    },
  ],
  exports: [StorageService],
})
export class StorageModule {}
