import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGameDto } from '../dto/create-game.dto'
import { Game, Prisma } from '.prisma/client';

@Injectable()
export class GameService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.game.findMany();
  }

  async create(createGameDto: CreateGameDto) {
  const data = createGameDto;
  
  return await this.prisma.game.create({
    data: {
      title: data.title,
      description: data.description,
      year: data.year,
      image: data.image,
      imdbScore: data.imdbScore,
      trailerYoutubeUrl: data.trailerYoutubeUrl
    } as Prisma.GameCreateInput,
  });
}
}