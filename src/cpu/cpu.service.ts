import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
  constructor(private power: PowerService) {}
  async compute(a: number, b: number) {
    const powerUsage: number = 15;
    console.log(`using ${powerUsage} watts of power to run cpu`);
    this.power.supplyPower(powerUsage);
    return a + b;
  }
}
