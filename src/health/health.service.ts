import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthService {
  checkHealth(): string {
    console.log('HealthService: checkHealth');
    return 'OK';
  }
  checkReady(): string {
    console.log('HealthService: checkHealth');
    return 'OK';
  }
}
