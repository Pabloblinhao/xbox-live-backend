import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UserService } from './user.service';
import { Response } from 'express';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async findAllUsers(@Res() response: Response) {
    try {
      const getAll = await this.userService.findAll();
      return response.send(getAll).status(200);
    } catch (err) {
      return response.send(err).status(400);
    }
  }

  @Post()
  async createUsers(@Body() createUserDto: CreateUserDto, @Res() response: Response) {
    try {
      await this.userService.create(createUserDto);
      return response.send({ message: "created" }).status(201);
    } catch (err) {
      return response.send(err).status(400);
    }
  }
}