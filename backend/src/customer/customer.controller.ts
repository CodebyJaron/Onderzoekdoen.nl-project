import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { CustomerService } from './customer.service';
import { Contact, Customer, Interest, Remark } from '@prisma/client';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { CreateRemarkDto } from './dto/create-remark.dto';
import { UpdateRemarkDto } from './dto/update-remark.dto';
import { CreateInterestDto } from './dto/create-interest.dto';
import { UpdateInterestDto } from './dto/update-interest.dto';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { JwtAuthGuard } from 'src/guard/auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  create(@Body() createCustomerDto: CreateCustomerDto): Promise<Customer> {
    return this.customerService.create(createCustomerDto);
  }

  @Get()
  findAll(): Promise<Customer[]> {
    return this.customerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Customer | null> {
    return this.customerService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCustomerDto: UpdateCustomerDto,
  ): Promise<Customer> {
    return this.customerService.update(+id, updateCustomerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Customer> {
    return this.customerService.remove(+id);
  }

  @Post(':id/remarks')
  addRemark(
    @Param('id') id: string,
    @Body() createRemarkDto: CreateRemarkDto,
  ): Promise<Remark> {
    return this.customerService.addRemark(+id, createRemarkDto);
  }

  @Patch('remarks/:id')
  updateRemark(
    @Param('id') id: string,
    @Body() updateRemarkDto: UpdateRemarkDto,
  ): Promise<Remark> {
    return this.customerService.updateRemark(+id, updateRemarkDto);
  }

  @Delete('remarks/:id')
  removeRemark(@Param('id') id: string): Promise<Remark> {
    return this.customerService.removeRemark(+id);
  }

  @Post(':id/interests')
  addInterest(
    @Param('id') id: string,
    @Body() createInterestDto: CreateInterestDto,
  ): Promise<Interest> {
    return this.customerService.addInterest(+id, createInterestDto);
  }

  @Patch('interests/:id')
  updateInterest(
    @Param('id') id: string,
    @Body() updateInterestDto: UpdateInterestDto,
  ): Promise<Interest> {
    return this.customerService.updateInterest(+id, updateInterestDto);
  }

  @Delete('interests/:id')
  removeInterest(@Param('id') id: string): Promise<Interest> {
    return this.customerService.removeInterest(+id);
  }

  @Post(':id/contacts')
  addContact(
    @Param('id') id: string,
    @Body() createContactDto: CreateContactDto,
  ): Promise<Contact> {
    return this.customerService.addContact(+id, createContactDto);
  }

  @Patch('contacts/:id')
  updateContact(
    @Param('id') id: string,
    @Body() updateContactDto: UpdateContactDto,
  ): Promise<Contact> {
    return this.customerService.updateContact(+id, updateContactDto);
  }

  @Delete('contacts/:id')
  removeContact(@Param('id') id: string): Promise<Contact> {
    return this.customerService.removeContact(+id);
  }
}
