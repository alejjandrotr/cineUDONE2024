import { Controller, Post, Body } from '@nestjs/common';
import { TarifaService } from '../service/tarifa.service';

@Controller('tarifas')
export class TarifaController {
  constructor(private readonly tarifaService: TarifaService) {}

  @Post('calcular-precio')
  calcularPrecio(@Body() data: { preciobase: number; edad: number; dia: string }) {
    return { precioFinal: this.tarifaService.calcularprecio(data.preciobase, data.edad, data.dia) };
  }
}
