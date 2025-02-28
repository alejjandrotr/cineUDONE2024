import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './config/typeorm.config';
import { MoviesModule } from '../moviesAgg/moviesModule';
import { MovieEditModule } from '../movieEdit/MovieEditModule';
import { DeleteMoviesModule } from '../delete-movies/DeleteMoviesModule';
import { FuncionesModule } from '../funcionAgg/funcionesModule';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync(typeORMConfig),
    MoviesModule,
    MovieEditModule,
    DeleteMoviesModule,
    FuncionesModule,
  ],
})
export class AppModule {}
