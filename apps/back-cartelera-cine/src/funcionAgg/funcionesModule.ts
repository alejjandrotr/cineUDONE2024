import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FuncionesService } from './service/funciones.service';
import { FuncionesController } from './funciones.controller';
import { Funcion } from './entity/funcion.entity';
import { Movie } from '../moviesAgg/entity/movie.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Funcion, Movie])],
  controllers: [FuncionesController],
  providers: [FuncionesService],
  exports: [FuncionesService],
})
export class FuncionesModule {}