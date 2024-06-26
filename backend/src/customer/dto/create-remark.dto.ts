import { IsString } from 'class-validator';

export class CreateRemarkDto {
  @IsString()
  content: string;
}
