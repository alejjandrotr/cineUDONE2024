import { IsNotEmpty, IsString, IsArray, IsUrl, IsInt, ArrayMinSize, ArrayMaxSize, Min, Max, IsNumber } from 'class-validator';

export class CreateMovieDto {
  @IsNotEmpty({ message: 'El título es obligatorio' })
  @IsString()
  title: string = '';

  @IsNotEmpty({ message: 'La sinopsis es obligatoria' })
  @IsString()
  synopsis: string = '';

  @IsNotEmpty({ message: 'Debe tener al menos un género' })
  @IsArray()
  @ArrayMinSize(1, { message: 'Debe tener al menos un género' })
  @ArrayMaxSize(3, { message: 'Máximo 3 géneros permitidos' })
  @IsInt({ each: true })
  @Min(1, { each: true })
  @Max(3, { each: true })
  genre: number[] = [];

  @IsNotEmpty({ message: 'El horario es obligatorio' })
  @IsArray()
  schedule: { date: string; room: string }[] = [];

  @IsNotEmpty({ message: 'El tipo es obligatorio' })
  @IsString()
  type: string = '';

  @IsNotEmpty({ message: 'La clasificación es obligatoria' })
  @IsString()
  rating: string = '';

  @IsNotEmpty({ message: 'La duración es obligatoria' })
  @IsInt()
  @Min(1, { message: 'La duración debe ser mayor a 0' })
  duration: number = 0;

  @IsNotEmpty({ message: 'El póster es obligatorio' })
  @IsUrl({}, { message: 'Debe ser una URL válida' })
  poster: string = '';

  @IsNotEmpty({ message: 'El precio es obligatorio' })
  @IsNumber()
  @Min(1, { message: 'El precio debe ser mayor a 0' })
  price: number = 0;

  @IsNotEmpty({ message: 'El tráiler es obligatorio' })
  @IsString()
  @IsUrl({}, { message: 'Debe ser una URL válida' })
  trailerUrl: string = '';
}
