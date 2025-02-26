import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from '../moviesAgg/entity/movie.entity';

@Injectable()
export class DeleteMoviesService {
  constructor(
    @InjectRepository(Movie)
    private moviesRepository: Repository<Movie>,
  ) {}

  async deleteMovie(movieId: number): Promise<void> {
    const result = await this.moviesRepository.delete(movieId);
    if (result.affected === 0) {
      throw new NotFoundException(`No se encontró la película con ID ${movieId}`);
    }
  }
}
