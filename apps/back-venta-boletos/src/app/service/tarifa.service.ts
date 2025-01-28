import { Injectable } from "@nestjs/common";

@Injectable()
export class TarifaService{
  calcularprecio(preciobase: number, edad: number, dia: string){

    let descuento = 0

    //Si el cliente es menor que 18 años, tendra un descuento del 50%
    if (edad < 18){
      descuento = 50;
    }

    if(edad >= 60){ //mayor de 60 años
      descuento = 30;
    }
    if (dia.toLowerCase() === 'lunes'){
      descuento = 20;
    }else{
      if(dia.toLowerCase() === 'jueves'){
        descuento = 20;
      }
    }

    const preciofinal = preciobase * (1 - descuento/100);
    return parseFloat(preciofinal.toFixed(2))
  }
}
