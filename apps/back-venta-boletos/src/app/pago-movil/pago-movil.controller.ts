import { Controller, Post, Body } from '@nestjs/common';
import { create_pago_movil } from './dto/create-pago-movil.dto'; //IMPORTANDO LA CLASE
import { PagoMovilService } from './pago-movil.service'; //IMPORTANDO LA CLASE

@Controller('pago-movil')
export class PagoMovilController{
  constructor (private Pago_movil_service: PagoMovilService){}

  @Post()
  CreatePagoMovil(@Body() new_pago_movil: create_pago_movil){
    return this.Pago_movil_service.CreatePagoMovil(new_pago_movil);
  }

}
