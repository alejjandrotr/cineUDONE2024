import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Factura } from './lista-factura.entity'; // Importa la entidad Factura
import { Paymentinfo } from '../paymentinfo/paymentinfo.entity'; // Importa la entidad Paymentinfo
import { FacturaService } from './lista-factura.service'; // Importa el servicio FacturaService
import { FacturaController } from './lista-factura.controller'; // Importa el controlador FacturaController

@Module({
  imports: [
    TypeOrmModule.forFeature([Factura, Paymentinfo]), // Registra Factura y Paymentinfo
  ],
  controllers: [FacturaController], // Registra el controlador
  providers: [FacturaService], // Registra el servicio
})
export class FacturaModule {}
