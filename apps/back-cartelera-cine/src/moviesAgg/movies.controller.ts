import { Controller, Post, Get, Body } from '@nestjs/common';
import { MoviesService } from './service/movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';

@Controller('movies') // Maneja rutas bajo /api/movies
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Post()
  addMovie(@Body() movieData: CreateMovieDto) {
    return this.moviesService.addMovie(movieData);
  }

  @Get()
  getMovies() {
    return this.moviesService.getAllMovies();
  }
}
