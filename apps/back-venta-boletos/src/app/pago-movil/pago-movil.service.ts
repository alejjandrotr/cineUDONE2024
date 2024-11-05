import { Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createpagomovil } from './pago-movil.entity'; // Clase de la entidad Pago-movil.
import { Repository } from 'typeorm';
import { create_pago_movil} from './dto/create-pago-movil.dto'; // definiendo los valores de la entidad.

@Injectable()
export class pago_movil_service {
  constructor (@InjectRepository(createpagomovil) private service_pago_movil: Repository <createpagomovil>){}

  create_pago_movil(createpagomovil: create_pago_movil){
    const new_pago_movil = this.service_pago_movil.create(createpagomovil)
    return this.service_pago_movil.save(new_pago_movil)
  }
}
///Este servicio permite crear y almacenar nuevos registros en la tabla pago-movil, para ver mas detalles de
///esta tabla ve el archivo pago-movil.entity.ts, en ese archivo se esta creando la clase de la tabla,
///donde esta definido los valores de la tabla Pago-movil es en el DTO.

