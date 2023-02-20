import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { User, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { cpf, ...data } = createUserDto; 
    return this.prisma.user.create({
      data: data as Prisma.UserCreateInput, 
    });
  }
}