import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Paymentinfo } from './paymentinfo/paymentinfo.entity';
import { PaymentinfoModule } from './paymentinfo/paymentinfo.module';
import {createpagomovil} from './pago-movil/pago-movil.entity';
import {PagoTransferencia} from './pago-transferencia/pago-transferencia.entity'
import {pago_movil_module} from './pago-movil/pago-movil.module';
import { PagoTransferenciaModule } from './pago-transferencia/pago-transferencia.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'cine',
      entities: [Paymentinfo, createpagomovil, PagoTransferencia],
      synchronize: true
    }),
    PaymentinfoModule,
    pago_movil_module,
    PagoTransferenciaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
