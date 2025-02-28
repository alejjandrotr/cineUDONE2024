import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Funcion } from '../../funcionAgg/entity/funcion.entity';
import { IsNotEmpty, IsInt, IsArray, ArrayMinSize, ArrayMaxSize, IsString, IsUrl, Min, Max } from 'class-validator';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  @IsNotEmpty({ message: 'El título es obligatorio' })
  @IsString()
  title: string = '';

  @Column()
  @IsNotEmpty({ message: 'La sinopsis es obligatoria' })
  @IsString()
  synopsis: string = '';

  @Column('simple-array')
  @IsArray()
  @ArrayMinSize(1, { message: 'Debe tener al menos un género' })
  @ArrayMaxSize(3, { message: 'Máximo 3 géneros permitidos' })
  @IsInt({ each: true })
  @Min(1, { each: true })
  @Max(3, { each: true })
  genre: number[] = [];

  @Column()
  @IsNotEmpty({ message: 'El tipo es obligatorio' })
  @IsString()
  type: string = '';

  @Column()
  @IsNotEmpty({ message: 'La clasificación es obligatoria' })
  @IsString()
  rating: string = '';

  @Column()
  @IsNotEmpty({ message: 'La duración es obligatoria' })
  @IsInt()
  @Min(1, { message: 'La duración debe ser mayor a 0' })
  duration: number = 0;

  @Column()
  @IsNotEmpty({ message: 'El póster es obligatorio' })
  @IsUrl({}, { message: 'Debe ser una URL válida' })
  poster: string = '';

  @Column()
  @IsNotEmpty({ message: 'El tráiler es obligatorio' })
  @IsUrl({}, { message: 'Debe ser una URL válida' })
  trailerUrl: string = '';

  // Agrega la relación con Funcion
  @OneToMany(() => Funcion, funcion => funcion.movie)
  funciones!: Funcion[];
}
