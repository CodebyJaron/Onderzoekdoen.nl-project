import { IsString, IsOptional, IsDateString } from 'class-validator';

export class CreateContactDto {
  @IsDateString()
  contactDate: Date;

  @IsOptional()
  @IsString()
  note?: string;
}
