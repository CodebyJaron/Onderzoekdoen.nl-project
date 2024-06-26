import { IsString, IsOptional } from 'class-validator';

export class UpdateRemarkDto {
  @IsOptional()
  @IsString()
  content?: string;
}
