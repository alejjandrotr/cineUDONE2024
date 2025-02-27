import { Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createpagomovil } from './pago-movil.entity'; // Clase de la entidad Pago-movil.
import { Repository } from 'typeorm';
import { create_pago_movil} from './dto/create-pago-movil.dto'; // definiendo los valores de la entidad.

@Injectable()
export class PagoMovilService {
  constructor (@InjectRepository(createpagomovil) private servicePagoMovil: Repository <createpagomovil>){}

  getDatosPagoMovil(){
    return this.servicePagoMovil.find();
  }
  
  createPagoMovil(createpagomovil: create_pago_movil){
    const newPagoMovil = this.servicePagoMovil.create(createpagomovil)
    return this.servicePagoMovil.save(newPagoMovil)
  }
}

