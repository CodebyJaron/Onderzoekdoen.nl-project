import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Customer, Remark, Interest, Contact } from '@prisma/client';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { CreateRemarkDto } from './dto/create-remark.dto';
import { UpdateRemarkDto } from './dto/update-remark.dto';
import { UpdateInterestDto } from './dto/update-interest.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { CreateContactDto } from './dto/create-contact.dto';
import { CreateInterestDto } from './dto/create-customer.dto';

@Injectable()
export class CustomerService {
  constructor(private prisma: PrismaService) {}

  async create(createCustomerDto: CreateCustomerDto): Promise<Customer> {
    const { companyName, phone, email, remarks, interests, contacts } =
      createCustomerDto;

    return this.prisma.customer.create({
      data: {
        companyName,
        phone,
        email,
        remarks: {
          create: remarks?.map((remark) => ({ content: remark.content })) || [],
        },
        interests: {
          create:
            interests?.map((interest) => ({
              interest: interest.interest,
              description: interest.description,
            })) || [],
        },
        contacts: {
          create:
            contacts?.map((contact) => ({
              contactDate: contact.contactDate,
              note: contact.note,
            })) || [],
        },
      },
    });
  }

  async findAll(): Promise<Customer[]> {
    return this.prisma.customer.findMany({
      include: { remarks: true, interests: true, contacts: true },
    });
  }

  async findOne(id: number): Promise<Customer | null> {
    return this.prisma.customer.findUnique({
      where: { id },
      include: {
        remarks: true,
        interests: true,
        contacts: true,
      },
    });
  }

  async update(
    id: number,
    updateCustomerDto: UpdateCustomerDto,
  ): Promise<Customer> {
    return this.prisma.customer.update({
      where: { id },
      data: updateCustomerDto,
    });
  }

  async remove(id: number): Promise<Customer> {
    return this.prisma.customer.delete({
      where: { id },
    });
  }

  async addRemark(
    customerId: number,
    createRemarkDto: CreateRemarkDto,
  ): Promise<Remark> {
    return this.prisma.remark.create({
      data: {
        ...createRemarkDto,
        customerId,
      },
    });
  }

  async updateRemark(
    id: number,
    updateRemarkDto: UpdateRemarkDto,
  ): Promise<Remark> {
    return this.prisma.remark.update({
      where: { id },
      data: updateRemarkDto,
    });
  }

  async removeRemark(id: number): Promise<Remark> {
    return this.prisma.remark.delete({
      where: { id },
    });
  }

  async addInterest(
    customerId: number,
    createInterestDto: CreateInterestDto,
  ): Promise<Interest> {
    return this.prisma.interest.create({
      data: {
        ...createInterestDto,
        customerId,
      },
    });
  }

  async updateInterest(
    id: number,
    updateInterestDto: UpdateInterestDto,
  ): Promise<Interest> {
    return this.prisma.interest.update({
      where: { id },
      data: updateInterestDto,
    });
  }

  async removeInterest(id: number): Promise<Interest> {
    return this.prisma.interest.delete({
      where: { id },
    });
  }

  async addContact(
    customerId: number,
    createContactDto: CreateContactDto,
  ): Promise<Contact> {
    return this.prisma.contact.create({
      data: {
        ...createContactDto,
        customerId,
      },
    });
  }

  async updateContact(
    id: number,
    updateContactDto: UpdateContactDto,
  ): Promise<Contact> {
    return this.prisma.contact.update({
      where: { id },
      data: updateContactDto,
    });
  }

  async removeContact(id: number): Promise<Contact> {
    return this.prisma.contact.delete({
      where: { id },
    });
  }
}
