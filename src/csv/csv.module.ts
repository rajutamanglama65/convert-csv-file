import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { CsvService } from './csv-service.service';
import { csv } from './entities/csv.entity';

@Module({
  imports: [TypeOrmModule.forFeature([csv])],
  controllers: [],
  providers: [CsvService]
})
export class csvModule {}
