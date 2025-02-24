import { Controller, Put, Body, Param } from '@nestjs/common';
import { MovieEditService } from '../service/movie-edit.service';
import { UpdateMovieDto } from '../dto/update-movie.dto';

@Controller('edit-movies')
export class MovieEditController {
  constructor(private readonly movieEditService: MovieEditService) {}

  @Put(':id')
  updateMovie(@Param('id') id: number, @Body() updateMovieDto: UpdateMovieDto) {
    return this.movieEditService.updateMovie(id, updateMovieDto);
  }
}