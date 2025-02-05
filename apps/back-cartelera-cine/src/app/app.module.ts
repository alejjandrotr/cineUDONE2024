import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesService } from '../movies/service/movies.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, MoviesService],
})
export class AppModule {}