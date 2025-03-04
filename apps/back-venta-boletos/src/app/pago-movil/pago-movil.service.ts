import { Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PagoMovil } from './pago-movil.entity'; // Clase de la entidad Pago-movil.
import { Repository } from 'typeorm';
import { PagoMovilDto } from './dto/create-pago-movil.dto'; // definiendo los valores de la entidad.

@Injectable()
export class PagoMovilService {
  constructor (@InjectRepository(PagoMovil) private servicePagoMovil: Repository<PagoMovil>){}

  getDatosPagoMovil(){
    return this.servicePagoMovil.find();
  }
  
  createPagoMovil(createpagomovil: PagoMovilDto){
    const newPagoMovil = this.servicePagoMovil.create(createpagomovil)
    return this.servicePagoMovil.save(newPagoMovil)
  }
}

