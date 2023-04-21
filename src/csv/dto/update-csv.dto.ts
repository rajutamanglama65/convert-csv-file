import { PartialType } from '@nestjs/mapped-types';
import { CreateCsvDto } from './create-csv.dto';

export class UpdateDatumDto extends PartialType(CreateCsvDto) {}
