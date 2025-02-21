import { Injectable } from '@nestjs/common';
import { Movie } from '../entity/movie.entity';
import { CreateMovieDto } from '../dto/create-movie.dto';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  addMovie(movieData: CreateMovieDto): Movie {
    const newMovie: Movie = {
      id: this.movies.length + 1, // Asegúrate de que `id` sea un número
      ...movieData,
    };
    this.movies.push(newMovie);
    return newMovie;
  }

  getAllMovies(): Movie[] {
    return this.movies;
  }
}
