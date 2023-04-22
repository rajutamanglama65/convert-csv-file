import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { CsvController } from './csv-controller.controller';
import { CsvService } from './csv-service.service';
import { Csv } from './entities/csv.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Csv])],
  controllers: [CsvController],
  providers: [CsvService]
})
export class CsvModule {}
