import { Controller, Post, Get, Body } from '@nestjs/common';
import { FacturaService } from './lista-factura.service';
import { Factura } from './lista-factura.entity';
import { CreateListaFacturas } from './dto/lista-factura.dto';

@Controller('facturas')
export class FacturaController {
  constructor(private readonly facturaService: FacturaService) {}

  // Endpoint para crear una nueva factura
  @Post()
  async CrearFactura(@Body() facturaData: CreateListaFacturas): Promise<Factura> {
    // Aquí usamos el DTO directamente
    return this.facturaService.CrearFactura(facturaData);
  }

  @Get()
  async listarFacturas(): Promise<Factura[]> {
    // Listar todas las facturas
    return this.facturaService.listarFacturas();
  }
}
