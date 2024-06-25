import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class UserService {
  prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async findByUsername(username: string) {
    return this.prisma.user.findUnique({
      where: {
        username,
      },
    });
  }
}
