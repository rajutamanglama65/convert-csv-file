import { Controller, Post, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CsvService } from './csv-service.service';
import { csvFile } from '../file/'

@Controller('csv')
export class CsvController {
  constructor(private readonly csvService: CsvService) {}

  @Post('convert')
  @UseInterceptors(FileInterceptor('file'))
  async import()  {
    const data = await this.csvService.parseCsv("../");
    await this.csvService.saveCsvToDb(data);
    return { message: 'Data imported successfully.' };
  }
}