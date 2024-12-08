import { Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createpagomovil } from './pago-movil.entity'; // Clase de la entidad Pago-movil.
import { Repository } from 'typeorm';
import { create_pago_movil} from './dto/create-pago-movil.dto'; // definiendo los valores de la entidad.

@Injectable()
export class PagoMovilService {
  constructor (@InjectRepository(createpagomovil) private service_pago_movil: Repository <createpagomovil>){}

  CreatePagoMovil(createpagomovil: create_pago_movil){
    const new_pago_movil = this.service_pago_movil.create(createpagomovil)
    return this.service_pago_movil.save(new_pago_movil)
  }
}

