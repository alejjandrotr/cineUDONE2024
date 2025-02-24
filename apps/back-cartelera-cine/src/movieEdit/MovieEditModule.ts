import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieEditService } from './service/movie-edit.service';
import { Movie } from '../moviesAgg/entity/movie.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Movie])],
  providers: [MovieEditService],
  exports: [MovieEditService],
})
export class MovieEditModule {}