import { Controller, Post, Body, Get, Delete, Param, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { MoviesService } from '../moviesAgg/service/movies.service';
import { DeleteMoviesService } from '../delete-movies/delete-movies.service';
import { CreateMovieDto } from '../moviesAgg/dto/create-movie.dto';
//import { AuthGuard } from '../auth/guards/auth.guard'; // Asumo que tienes un guard para la autenticación

@Controller('api') // Agrega el prefijo 'api'
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

  @Post('movies') // Ruta: POST /api/movies
  addMovie(@Body() movieData: CreateMovieDto) {
    return this.moviesService.addMovie(movieData);
  }

  @Get('movies') // Ruta: GET /api/movies
  getMovies() {
    return this.moviesService.getAllMovies();
  }

  @Delete('movies/:id') // Ruta: DELETE /api/movies/:id
  deleteMovie(@Param('id') id: number) {
    this.deleteMoviesService.deleteMovie(id);
    return { message: `Movie with id ${id} deleted successfully` };
  }
}
