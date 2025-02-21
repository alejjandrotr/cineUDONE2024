import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from '../movies/entity/movie.entity';

@Injectable()
export class DeleteMoviesService {
  private movies: Movie[] = [];

  deleteMovie(movieId: number): void {
    const movieIndex = this.movies.findIndex(movie => movie.id === movieId);
    if (movieIndex === -1) {
      throw new NotFoundException(`Movie with id ${movieId} not found`);
    }
    this.movies.splice(movieIndex, 1);
  }
}