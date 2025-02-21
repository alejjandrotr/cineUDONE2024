import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesService } from '../moviesAgg/service/movies.service';
import { DeleteMoviesController } from '../delete-movies/delete-movies.controller';
import { DeleteMoviesService } from '../delete-movies/delete-movies.service';
import { MovieEditController } from '../movieEdit/controller/movie-edit.controller';
import { MovieEditService } from '../movieEdit/service/movie-edit.service';

@Module({
  imports: [],
  controllers: [AppController, DeleteMoviesController, MovieEditController],
  providers: [AppService, MoviesService, DeleteMoviesService, MovieEditService],
})
export class AppModule {}