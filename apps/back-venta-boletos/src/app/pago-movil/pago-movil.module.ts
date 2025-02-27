import { Module } from '@nestjs/common';
import { PagoMovilController } from './pago-movil.controller';
import { PagoMovilService } from './pago-movil.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { createpagomovil } from './pago-movil.entity';

//Estamos declarando en el modulo todas las que estamos usando.
@Module({
  imports: [TypeOrmModule.forFeature([createpagomovil])],
  controllers: [PagoMovilController],
  providers: [PagoMovilService]


})
export class PagoMovilModule{}
