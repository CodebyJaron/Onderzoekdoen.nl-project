import { IsString, IsOptional } from 'class-validator';

export class CreateInterestDto {
  @IsString()
  interest: string;

  @IsOptional()
  @IsString()
  description?: string;
}
