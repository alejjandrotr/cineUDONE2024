import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesService } from '../movies/service/movies.service';
import { DeleteMoviesController } from '../delete-movies/delete-movies.controller';
import { DeleteMoviesService } from '../delete-movies/delete-movies.service';

@Module({
  imports: [],
  controllers: [AppController, DeleteMoviesController],
  providers: [AppService, MoviesService, DeleteMoviesService],
})
export class AppModule {}
