import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
  constructor(private power: PowerService) {}
  async getData() {
    const powerUsage: number = 10;
    console.log(`using ${powerUsage} watts of power to load data`);
    this.power.supplyPower(powerUsage);
    return 'Some Data Loaded !';
  }
}
