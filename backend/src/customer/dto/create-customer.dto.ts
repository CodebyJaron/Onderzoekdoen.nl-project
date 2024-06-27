import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsString,
  ValidateNested,
  IsDate,
} from 'class-validator';

class CreateRemarkDto {
  @ApiProperty({ description: 'Content of the remark' })
  @IsString()
  @IsNotEmpty()
  content: string;
}

class CreateInterestDto {
  @ApiProperty({ description: 'Interest' })
  @IsString()
  @IsNotEmpty()
  interest: string;

  @ApiProperty({ description: 'Description of the interest' })
  @IsString()
  @IsNotEmpty()
  description: string;
}

class CreateContactDto {
  @ApiProperty({ description: 'Date of contact' })
  @IsDate()
  @IsNotEmpty()
  contactDate: Date;

  @ApiProperty({ description: 'Note about the contact' })
  @IsString()
  @IsNotEmpty()
  note: string;
}

export class CreateCustomerDto {
  @ApiProperty({ description: 'Id of the customer', required: false })
  id: number;

  @ApiProperty({ description: 'Name of the company', required: true })
  @IsString()
  @IsNotEmpty()
  companyName: string;

  @ApiProperty({ description: 'Phone number of the company' })
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({ description: 'Email address of the company', required: true })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ type: [CreateRemarkDto], description: 'List of remarks' })
  @IsArray()
  @ValidateNested({ each: true })
  @IsNotEmpty()
  remarks: CreateRemarkDto[];

  @ApiProperty({ type: [CreateInterestDto], description: 'List of interests' })
  @IsArray()
  @ValidateNested({ each: true })
  @IsNotEmpty()
  interests: CreateInterestDto[];

  @ApiProperty({ type: [CreateContactDto], description: 'List of contacts' })
  @IsArray()
  @ValidateNested({ each: true })
  @IsNotEmpty()
  contacts: CreateContactDto[];
}
