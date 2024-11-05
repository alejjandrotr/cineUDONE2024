import { Controller, Post, Body } from '@nestjs/common';
import { create_pago_movil } from './dto/create-pago-movil.dto'; //IMPORTANDO LA CLASE
import { pago_movil_service } from './pago-movil.service'; //IMPORTANDO LA CLASE


///NOTA IMPORTANTE, YA QUE ESTO SON CLASES CUANDO IMPORTAMOS LA CLASE PRINCIPAL DEL ARCHIVO, PODEMOS USAR
/// LAS FUNCIONES QUE HEMOS DECLARADO EN LA CLASE.

@Controller('pago-movil')
export class pago_movil_controller{
  constructor (private Pago_movil_service: pago_movil_service){}

  @Post()
  create_pago_movil(@Body() new_pago_movil: create_pago_movil){
    return this.Pago_movil_service.create_pago_movil(new_pago_movil);
  }

}
