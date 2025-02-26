import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from '../entity/movie.entity';
import { CreateMovieDto } from '../dto/create-movie.dto';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private moviesRepository: Repository<Movie>,
  ) {}

  async addMovie(movieData: CreateMovieDto): Promise<Movie> {
    const newMovie = this.moviesRepository.create(movieData);
    return this.moviesRepository.save(newMovie);
  }

  async getAllMovies(): Promise<Movie[]> {
    return this.moviesRepository.find();
  }

  async getMovieById(id: string): Promise<Movie> {
    const movie = await this.moviesRepository.findOne({ where: { id: Number(id) } });
    if (!movie) {
      throw new Error(`Movie with id ${id} not found`);
    }
    return movie;
  }

}
