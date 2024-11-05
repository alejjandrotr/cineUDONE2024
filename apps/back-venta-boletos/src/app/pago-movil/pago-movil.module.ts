import { Module } from '@nestjs/common';
import { pago_movil_controller } from './pago-movil.controller';
import { pago_movil_service } from './pago-movil.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { createpagomovil } from './pago-movil.entity';

//Estamos declarando en el modulo todas las que estamos usando.
@Module({
  imports: [TypeOrmModule.forFeature([createpagomovil])],
  controllers: [pago_movil_controller],
  providers: [pago_movil_service]


})
export class pago_movil_module{}

/// Al definir un módulo, se registran todas las dependencias que necesita el módulo,
/// como controladores, servicios y entidades.
