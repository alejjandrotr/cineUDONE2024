import {
  IsOptional,
  IsString,
  IsArray,
  IsUrl,
  IsInt,
  ArrayMinSize,
  ArrayMaxSize,
  Min,
  Max,
  IsNumber
} from 'class-validator';

export class UpdateMovieDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  synopsis?: string;

  @IsOptional()
  @IsArray()
  @ArrayMinSize(1, { message: 'Debe tener al menos un género' })
  @ArrayMaxSize(3, { message: 'Máximo 3 géneros permitidos' })
  @IsInt({ each: true })
  @Min(1, { each: true })
  @Max(3, { each: true })
  genre?: number[];

  @IsOptional()
  @IsString()
  type?: string;

  @IsOptional()
  @IsString()
  rating?: string;

  @IsOptional()
  @IsInt()
  @Min(1, { message: 'La duración debe ser mayor a 0' })
  duration?: number;

  @IsOptional()
  @IsUrl({}, { message: 'Debe ser una URL válida' })
  poster?: string;

  @IsOptional()
  @IsNumber()
  @Min(1, { message: 'El precio debe ser mayor a 0' })
  price?: number;

  @IsOptional()
  @IsString()
  @IsUrl({}, { message: 'Debe ser una URL válida' })
  trailerUrl?: string;
}
