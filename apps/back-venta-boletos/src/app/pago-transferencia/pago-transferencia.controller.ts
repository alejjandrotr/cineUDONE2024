import { Controller, Post, Body } from '@nestjs/common';
import { CreatePagoTransferenciadto } from './dto/create-pago-transferencia.dto'; // Importando el DTO
import { PagoTransferenciaService } from './pago-transferencia.service'; // Importando el servicio

@Controller('pago-transferencia')
export class PagoTransferenciaController {
  constructor(private readonly pagoTransferenciaService: PagoTransferenciaService) {}

  @Post()
  createTransferencia(@Body() newTransferencia: CreatePagoTransferenciadto) {
    return this.pagoTransferenciaService.createPagoTransferencia(newTransferencia);
  }
}
