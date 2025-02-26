import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from '../../moviesAgg/entity/movie.entity';
import { UpdateMovieDto } from '../dto/update-movie.dto';

@Injectable()
export class MovieEditService {
  constructor(
    @InjectRepository(Movie)
    private moviesRepository: Repository<Movie>,
  ) {}

  async updateMovie(id: number, updateData: UpdateMovieDto): Promise<Movie> {
    const movie = await this.moviesRepository.findOne({ where: { id } });
    if (!movie) {
      throw new NotFoundException(`Movie with id ${id} not found`);
    }
    Object.assign(movie, updateData);
    return this.moviesRepository.save(movie);
  }
}