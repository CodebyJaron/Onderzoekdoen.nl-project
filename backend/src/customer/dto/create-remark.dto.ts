import { IsString, IsDateString } from 'class-validator';

export class CreateRemarkDto {
  @IsString()
  content: string;

  @IsDateString()
  createdAt: Date;
}
