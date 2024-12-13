import { Module } from '@nestjs/common';
import { PagoTransferenciaController } from './pago-transferencia.controller';
import { PagoTransferenciaService } from './pago-transferencia.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PagoTransferencia } from './pago-transferencia.entity';

// Declaramos en el módulo todas las clases que estamos usando.
@Module({
  imports: [TypeOrmModule.forFeature([PagoTransferencia])],
  controllers: [PagoTransferenciaController],
  providers: [PagoTransferenciaService],
})
export class PagoTransferenciaModule {}
