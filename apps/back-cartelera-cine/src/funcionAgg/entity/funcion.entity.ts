import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Movie } from '../../moviesAgg/entity/movie.entity';

@Entity()
export class Funcion {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'timestamp' })
  horarioInicio: Date = new Date();

  @Column({ type: 'timestamp' })
  horarioFin: Date = new Date();

  @Column()
  sala: string = '';

  @ManyToOne(() => Movie, movie => movie.funciones, { nullable: false })
  @JoinColumn({ name: 'movieId' })
  movie!: Movie;

  @Column()
  movieId: number = 0;

  @Column('json')
  schedule: { date: string; room: string }[] = [];
}
