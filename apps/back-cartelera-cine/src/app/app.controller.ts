import { Controller, Post, Body, Get, Delete, Param, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { MoviesService } from '../moviesAgg/service/movies.service';
import { DeleteMoviesService } from '../delete-movies/delete-movies.service';
import { CreateMovieDto } from '../moviesAgg/dto/create-movie.dto';
//import { AuthGuard } from '../auth/guards/auth.guard'; // Asumo que tienes un guard para la autenticación

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly moviesService: MoviesService,
    private readonly deleteMoviesService: DeleteMoviesService
  ) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  //@UseGuards(AuthGuard) // Protegemos la ruta para que solo los administradores puedan acceder
  @Post('movies')
  addMovie(@Body() movieData: CreateMovieDto) {
    return this.moviesService.addMovie(movieData);
  }

  @Get('movies')
  getMovies() {
    return this.moviesService.getAllMovies();
  }

  @Delete('movies/:id')
  deleteMovie(@Param('id') id: number) {
    this.deleteMoviesService.deleteMovie(id);
    return { message: `Movie with id ${id} deleted successfully` };
  }
}
