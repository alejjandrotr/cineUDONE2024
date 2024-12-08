import { Controller, Post, Get, Body } from '@nestjs/common';
import { FacturaService } from './lista-factura.service';
import { Factura } from './lista-factura.entity';

@Controller('facturas')
export class FacturaController {
  constructor(private readonly facturaService: FacturaService) {}

  // Endpoint para crear una nueva factura
  @Post()
  async crearFactura(@Body() facturaData: Partial<Factura>): Promise<Factura> {
    return this.facturaService.CrearFactura(facturaData);
  }

  @Get() //listar las facturas
  async listarFacturas(): Promise<Factura[]> {
    return this.facturaService.listarFacturas();
  }
}
