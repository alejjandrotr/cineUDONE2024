import { IsNotEmpty, IsString, IsArray, IsUrl, IsInt } from 'class-validator';

export class CreateMovieDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  synopsis: string;

  @IsNotEmpty()
  @IsArray()
  genre: number[];

  @IsNotEmpty()
  @IsArray()
  schedule: { date: string; room: string }[];

  @IsNotEmpty()
  @IsString()
  type: string;

  @IsNotEmpty()
  @IsString()
  rating: string;

  @IsNotEmpty()
  duration: number;

  @IsNotEmpty()
  @IsUrl()
  poster: string;

  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  @IsString()
  trailerUrl: string;
}
