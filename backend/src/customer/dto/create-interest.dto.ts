import { IsString, IsOptional } from 'class-validator';

export class CreateInterestDto {
  @IsString()
  interest: string;

  @IsString()
  description: string;
}
