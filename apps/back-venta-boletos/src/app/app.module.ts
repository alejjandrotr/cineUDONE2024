import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config'
import { PaymentinfoModule } from './paymentinfo/paymentinfo.module';
import {createpagomovil} from './pago-movil/pago-movil.entity';
import {PagoTransferencia} from './pago-transferencia/pago-transferencia.entity'
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
    PaymentinfoModule, PrecioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
