import { Controller, Post, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CsvService } from './csv-service.service';

@Controller('csv')
export class CsvController {
  constructor(private readonly csvService: CsvService) {}

  @Post('convert')
  @UseInterceptors(FileInterceptor('file'))
  async import()  {
    // const csvFile = '/home/tejfellowship/fusemachines/hackathon-okr-project/2022 OKRs 181618ad1b3f4f5c86664eaf1ecab226.csv'
    const csvFile = '/home/tejfellowship/fusemachines/hackathon-okr-project/2022 OKRs 22cbbf236653411899da8e5ddc2d08cc.csv'

    const data = await this.csvService.parseCsv(csvFile);
    // console.log("data: ", data)
    await this.csvService.saveCsvToDb(data);
    return { message: 'Data imported successfully.' };
  }
}