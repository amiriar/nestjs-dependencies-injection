import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
    async supplyPower(watts: number){
        console.log(`im using ${watts} watts to run the computer`);
    }
}
