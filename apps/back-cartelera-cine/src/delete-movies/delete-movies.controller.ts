import { Controller, Delete, Param, HttpException, HttpStatus } from '@nestjs/common';
import { DeleteMoviesService } from './delete-movies.service';

@Controller('delete-movies')
export class DeleteMoviesController {
  constructor(private readonly deleteMoviesService: DeleteMoviesService) {}

  @Delete(':id')
  async deleteMovie(@Param('id') id: string) {
    const movieId = parseInt(id, 10);
    if (isNaN(movieId)) {
      throw new HttpException('Invalid ID', HttpStatus.BAD_REQUEST);
    }

    await this.deleteMoviesService.deleteMovie(movieId);
    return { message: `Película con id ${movieId} eliminada correctamente` };
  }
}
