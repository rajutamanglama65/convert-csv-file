import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as csvParser from 'csv-parser';
import * as fs from 'fs';
import { csv } from './entities/csv.entity';

@Injectable()
export class CsvService {
  constructor(
    @InjectRepository(csv)
    private readonly csvRepository: Repository<csv>,
  ) {}

  async parseCsv(filePath: string): Promise<any[]> {
    const results = [];
    return new Promise((resolve, reject) => {
      fs.createReadStream(filePath)
        .pipe(csvParser())
        .on('data', (data) => results.push(data))
        .on('end', () => {
          resolve(results);
        })
        .on('error', (error) => {
          reject(error);
        });
    });
  }

  async saveCsvToDb(data: any[]): Promise<any> {
    return await this.csvRepository.save(data);
  }
}