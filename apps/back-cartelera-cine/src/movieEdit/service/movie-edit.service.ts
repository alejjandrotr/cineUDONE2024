import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from '../../moviesAgg/entity/movie.entity';
import { UpdateMovieDto } from '../dto/update-movie.dto';

@Injectable()
export class MovieEditService {
  private movies: Movie[] = [];

  updateMovie(id: number, updateData: UpdateMovieDto): Movie {
    const movieIndex = this.movies.findIndex(movie => movie.id === id);
    if (movieIndex === -1) {
      throw new NotFoundException(`Movie with id ${id} not found`);
    }
    const updatedMovie = { ...this.movies[movieIndex], ...updateData };
    this.movies[movieIndex] = updatedMovie;
    return updatedMovie;
  }
}