import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class DallEService implements OnModuleInit {
  onModuleInit() {
    throw new Error('Method not implemented.');
  }
}
