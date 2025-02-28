import { Controller, Post, Body, Get } from '@nestjs/common';
import { PagoMovilDto } from './dto/create-pago-movil.dto'; //IMPORTANDO LA CLASE
import { PagoMovilService } from './pago-movil.service'; //IMPORTANDO LA CLASE

@Controller('pago-movil')
export class PagoMovilController{
  constructor (private pagoMovilService: PagoMovilService){}

  @Get()
  getPagoMovil(){
    return this.pagoMovilService.getDatosPagoMovil();
  }

  @Post()
  createPagoMovil(@Body() newPagoMovil: PagoMovilDto){
    return this.pagoMovilService.createPagoMovil(newPagoMovil);
  }

}
