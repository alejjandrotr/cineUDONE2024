import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreatePagoTransferenciadto } from './dto/create-pago-transferencia.dto'; // Importando el DTO
import { PagoTransferenciaService } from './pago-transferencia.service'; // Importando el servicio

@Controller('pago-transferencia')
export class PagoTransferenciaController {
  constructor(private readonly pagoTransferenciaService: PagoTransferenciaService) {}

  @Get()
  getTransferencia(){
    return this.pagoTransferenciaService.getDatosTransferencia();
  }
  
  @Post()
  createTransferencia(@Body() newTransferencia: CreatePagoTransferenciadto) {
    return this.pagoTransferenciaService.createDatosTransferencia(newTransferencia);
  }

}
