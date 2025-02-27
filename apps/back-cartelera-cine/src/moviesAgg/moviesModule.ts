import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviesService } from './service/movies.service';
import { Movie } from './entity/movie.entity';
import { MoviesController } from './movies.controller'; // Importa el controlador

@Module({
  imports: [TypeOrmModule.forFeature([Movie])],
  controllers: [MoviesController], // Asegúrate de registrar el controlador aquí
  providers: [MoviesService],
  exports: [MoviesService],
})
export class MoviesModule {}
