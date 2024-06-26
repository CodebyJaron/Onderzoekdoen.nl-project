import { IsString, IsOptional, IsEmail } from 'class-validator';

export class UpdateCustomerDto {
  @IsOptional()
  @IsString()
  companyName?: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsEmail()
  email?: string;
}
