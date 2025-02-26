import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeleteMoviesService } from './delete-movies.service';
import { DeleteMoviesController } from './delete-movies.controller'; // <-- Importa el controlador
import { Movie } from '../moviesAgg/entity/movie.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Movie])],
  controllers: [DeleteMoviesController], // <-- Agrega el controlador aquí
  providers: [DeleteMoviesService],
  exports: [DeleteMoviesService],
})
export class DeleteMoviesModule {}
