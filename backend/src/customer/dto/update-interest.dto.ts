import { IsString, IsOptional } from 'class-validator';

export class UpdateInterestDto {
  @IsOptional()
  @IsString()
  interest?: string;

  @IsOptional()
  @IsString()
  description?: string;
}
