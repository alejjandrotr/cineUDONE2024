import { Injectable } from "@nestjs/common";

@Injectable()
export class TarifaService{
  calcularprecio(preciobase: number, edad: number, dia: string){

    let descuento = 0


    if (edad >= 5 && edad <= 10){
      descuento += 20;
    }else{
      if(edad >= 60 && edad <= 100){
        descuento += 30;
      }else{
        if(edad >= 10 && edad <= 50){
          descuento += 0;
        }
      }
    }

    if (dia.toLowerCase() === 'lunes'){
      descuento += 20;
    }else{
      if(dia.toLowerCase() === 'martes'){
        descuento += 15;
      }else{
        if(dia.toLowerCase() === 'miercoles'){
          descuento += 15;
        }else{
          if(dia.toLowerCase() === 'jueves'){
            descuento += 10;
          }else{
            if(dia.toLowerCase() === 'viernes'){
              descuento += 10;
            }else{
              if(dia.toLowerCase() === 'sabado'){
                descuento += 10;
              }else{
                if(dia.toLowerCase() === 'domingo'){
                  descuento += 10;
                }
              }
            }
          }
        }
      }
    }

    const preciofinal = preciobase * (1 - descuento/100);
    return parseFloat(preciofinal.toFixed(2))
  }
}
