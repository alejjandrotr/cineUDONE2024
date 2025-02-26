import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieEditService } from './service/movie-edit.service';
import { MovieEditController } from './controller/movie-edit.controller';
import { Movie } from '../moviesAgg/entity/movie.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Movie])],
  controllers: [MovieEditController], // Agregar el controlador
  providers: [MovieEditService],
  exports: [MovieEditService],
})
export class MovieEditModule {}
