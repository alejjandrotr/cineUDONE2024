import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Funcion } from '../entity/funcion.entity';
import { CreateFuncionDto } from '../dto/create-funcion.dto';
import { Movie } from '../../moviesAgg/entity/movie.entity';

@Injectable()
export class FuncionesService {
  constructor(
    @InjectRepository(Funcion)
    private funcionesRepository: Repository<Funcion>,
    @InjectRepository(Movie)
    private moviesRepository: Repository<Movie>,
  ) {}

   createFuncion(dto: CreateFuncionDto): Funcion {

    const nuevaFuncion = new Funcion();
    nuevaFuncion.movieId = dto.movieId;
    nuevaFuncion.sala = dto.sala;
    nuevaFuncion.horarioInicio = new Date(`1970-01-01T${dto.horarioInicio}:00`); // ⬅️ Convertimos a Date
    nuevaFuncion.horarioFin = new Date(`1970-01-01T${dto.horarioFin}:00`);       // ⬅️ Convertimos a Date
    console.log({nuevaFuncion})
    return (nuevaFuncion);
  }

  async addFuncion(funcionData: CreateFuncionDto): Promise<Funcion> {
    const movie = await this.moviesRepository.findOneBy({ id: funcionData.movieId });
    if (!movie) {
      throw new Error('La película no existe');
    }
    const t = this.createFuncion(funcionData)
    console.log({t})
    // Aquí se puede agregar lógica para verificar la disponibilidad de la sala

    const newFuncion = this.funcionesRepository.create(t);
    console.log({newFuncion})
    return this.funcionesRepository.save(newFuncion);
  }

  async getAllFunciones(): Promise<Funcion[]> {
    return this.funcionesRepository.find();
  }
}
