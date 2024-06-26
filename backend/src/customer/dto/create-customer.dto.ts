import { IsString, IsOptional, IsEmail } from 'class-validator';

export class CreateCustomerDto {
  @IsString()
  companyName: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsEmail()
  email: string;
}
