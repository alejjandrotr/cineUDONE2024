import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { MoviesService } from '../movies/service/movies.service';
import { CreateMovieDto } from '../movies/dto/create-movie.dto';
// ejcutar pipeline  import { AuthGuard } from '../auth/guards/auth.guard'; 

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly moviesService: MoviesService
  ) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  //@UseGuards(AuthGuard) 
  @Post('movies')
  addMovie(@Body() movieData: CreateMovieDto) {
    return this.moviesService.addMovie(movieData);
  }

  @Get('movies')
  getMovies() {
    return this.moviesService.getAllMovies();
  }
}
