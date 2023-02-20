import { Body, Controller, Get, Post, Res } from "@nestjs/common";
import { GameService } from "./game.service";
import { Response } from 'express';
import { CreateGameDto } from "src/dto/create-game.dto";

@Controller('games')
export class GameController {
    constructor(private gameService: GameService) {}
    @Get()
    async findAllMovies(@Res() response: Response) {
        try{
            const getAll = await this.gameService.findAll();
            return response.send(getAll).status(200)
        } catch (err) {
            return response.send(err).status(400);
        }
    }

    @Post()
    async createGames(@Body() createGameDto: CreateGameDto, @Res() response: Response) {
        try {
            await this.gameService.create(createGameDto);
            return response.send({message: "created"}).status(201);
        } catch (err) {
            return response.send(err).status(400)
        }
    }
}