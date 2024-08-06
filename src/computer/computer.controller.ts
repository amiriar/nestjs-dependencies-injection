import { Controller, Get } from '@nestjs/common';
import { CpuService } from 'src/cpu/cpu.service';
import { DiskService } from 'src/disk/disk.service';

@Controller('computer')
export class ComputerController {
  constructor(
    private cpu: CpuService,
    private disk: DiskService,
  ) {}

  @Get()
  async runComputer() {
    const cpuResult = await this.cpu.compute(1, 2)
    const diskResult = await this.disk.getData()
    
    return {cpuResult, diskResult};
  }
}
