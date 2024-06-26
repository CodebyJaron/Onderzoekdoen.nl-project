import { IsString, IsOptional, IsDateString } from 'class-validator';

export class CreateContactDto {
  @IsDateString()
  contactDate: string;

  @IsOptional()
  @IsString()
  note?: string;
}
