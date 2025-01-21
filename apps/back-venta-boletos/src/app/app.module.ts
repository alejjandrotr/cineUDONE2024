import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
<<<<<<< HEAD
import { TypeOrmModule } from '@nestjs/typeorm'
import { Paymentinfo } from './paymentinfo/paymentinfo.entity';
import { PaymentinfoModule } from './paymentinfo/paymentinfo.module';
import {createpagomovil} from './pago-movil/pago-movil.entity';
import {PagoTransferencia} from './pago-transferencia/pago-transferencia.entity'
import {pago_movil_module} from './pago-movil/pago-movil.module';
import { PagoTransferenciaModule } from './pago-transferencia/pago-transferencia.module';
import { PrecioModule } from './precio/precio.module';
import { Factura } from './lista-factura/lista-factura.entity';
import { FacturaModule } from './lista-factura/lista-factura.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'cine',
      entities: [Paymentinfo, createpagomovil, PagoTransferencia, Factura],
      synchronize: true
    }),
    PaymentinfoModule,
    pago_movil_module,
    PagoTransferenciaModule,
    FacturaModule,
  ],
=======
import { ConfigModule } from '@nestjs/config'
import { PaymentinfoModule } from './paymentinfo/paymentinfo.module';
import {pago_movil_module} from './pago-movil/pago-movil.module';
import { PagoTransferenciaModule } from './pago-transferencia/pago-transferencia.module';
import { PrecioModule } from './precio/precio.module';
import { typeORMConfig } from './config/typeorm.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    typeORMConfig,
    PaymentinfoModule, PrecioModule,PagoTransferenciaModule,pago_movil_module],
>>>>>>> e05e76b859b676e9a568297baf26dd44680b3a7f
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
