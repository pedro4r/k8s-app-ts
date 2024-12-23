import { Controller, Get } from '@nestjs/common';
import { HealthService } from './health.service';

@Controller()
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Get('/healthz')
  healthz(): string {
    return 'OK';
  }

  @Get('/readyz')
  readyz(): string {
    return this.healthService.checkReady();
  }
}
