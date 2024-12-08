import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PagoTransferencia } from './pago-transferencia.entity'; // Clase de la entidad PagoTransferencia.
import { Repository } from 'typeorm';
import { CreatePagoTransferenciadto } from './dto/create-pago-transferencia.dto'; // DTO para definir los valores de la entidad.

@Injectable()
export class PagoTransferenciaService {
  constructor(
    @InjectRepository(PagoTransferencia)
    private servicePagoTransferencia: Repository<PagoTransferencia>,
  ) {}

  createPagoTransferencia(createPagoTransferenciaDto: CreatePagoTransferenciadto) {
    const newPagoTransferencia = this.servicePagoTransferencia.create(createPagoTransferenciaDto);
    return this.servicePagoTransferencia.save(newPagoTransferencia);
  }
}
