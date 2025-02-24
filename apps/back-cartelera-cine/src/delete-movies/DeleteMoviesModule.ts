import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeleteMoviesService } from './delete-movies.service';
import { Movie } from '../moviesAgg/entity/movie.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Movie])],
  providers: [DeleteMoviesService],
  exports: [DeleteMoviesService],
})
export class DeleteMoviesModule {}