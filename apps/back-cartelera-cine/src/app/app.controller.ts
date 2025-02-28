import { Controller, Post, Body, Get, Delete, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { MoviesService } from '../moviesAgg/service/movies.service';
import { DeleteMoviesService } from '../delete-movies/delete-movies.service';
import { CreateMovieDto } from '../moviesAgg/dto/create-movie.dto';
import { FuncionesService } from '../funcionAgg/service/funciones.service';
import { CreateFuncionDto } from '../funcionAgg/dto/create-funcion.dto';

@Controller('api') // Prefijo 'api'
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly moviesService: MoviesService,
    private readonly deleteMoviesService: DeleteMoviesService,
    private readonly funcionesService: FuncionesService, // 🔹 Inyectamos el servicio de funciones
  ) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  // 🟢 Rutas de Películas
  @Post('movies') // POST /api/movies
  addMovie(@Body() movieData: CreateMovieDto) {
    return this.moviesService.addMovie(movieData);
  }

  @Get('movies') // GET /api/movies
  getMovies() {
    return this.moviesService.getAllMovies();
  }

  @Delete('movies/:id') // DELETE /api/movies/:id
  deleteMovie(@Param('id') id: number) {
    this.deleteMoviesService.deleteMovie(id);
    return { message: `Movie with id ${id} deleted successfully` };
  }

  // 🟢 Rutas de Funciones
  @Post('funciones') // POST /api/funciones
  async addFuncion(@Body() funcionData: CreateFuncionDto) {
    console.log('✅ Datos recibidos en el backend:', funcionData); // 🔹 Debug

  }

  @Get('funciones') // GET /api/funciones
  getFunciones() {
    return this.funcionesService.getAllFunciones();
  }

}
