import { Controller, Delete, Param } from '@nestjs/common';
import { DeleteMoviesService } from './delete-movies.service';

@Controller('delete-movies')
export class DeleteMoviesController {
  constructor(private readonly deleteMoviesService: DeleteMoviesService) {}

  @Delete(':id')
  deleteMovie(@Param('id') id: number) {
    this.deleteMoviesService.deleteMovie(id);
    return { message: `Movie with id ${id} deleted successfully` };
  }
}