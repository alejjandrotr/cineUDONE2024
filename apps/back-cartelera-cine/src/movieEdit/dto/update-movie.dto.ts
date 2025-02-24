import { IsOptional, IsString, IsArray, IsUrl, IsInt } from 'class-validator';

export class UpdateMovieDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  synopsis?: string;

  @IsOptional()
  @IsArray()
  goenre?: number[];

  @IsOptional()
  @IsArray()
  schedule?: { date: string; room: string }[];

  @IsOptional()
  @IsString()
  type?: string;

  @IsOptional()
  @IsString()
  rating?: string;

  @IsOptional()
  duration?: number;

  @IsOptional()
  @IsUrl()
  poster?: string;

  @IsOptional()
  price?: number;

  @IsOptional()
  @IsString()
  trailerUrl?: string;
}