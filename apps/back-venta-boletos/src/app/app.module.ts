import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { typeORMConfig } from './config/typeorm.config';
import { PaymentinfoModule } from './paymentinfo/paymentinfo.module';
import { pago_movil_module } from './pago-movil/pago-movil.module';
import { PagoTransferenciaModule } from './pago-transferencia/pago-transferencia.module';
import { PrecioModule } from './precio/precio.module';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    typeORMConfig,
    EventEmitterModule.forRoot(),
    PaymentinfoModule, PrecioModule,PagoTransferenciaModule,pago_movil_module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
