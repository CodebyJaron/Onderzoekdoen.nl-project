import { IsString, IsOptional, IsDateString } from 'class-validator';

export class UpdateContactDto {
  @IsOptional()
  @IsDateString()
  contactDate?: string;

  @IsOptional()
  @IsString()
  note?: string;
}
