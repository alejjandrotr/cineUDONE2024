import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { typeORMConfig } from './config/typeorm.config';;
import { PaymentinfoModule } from './paymentinfo/paymentinfo.module';
import { PagoMovilModule } from './pago-movil/pago-movil.module';
import { PagoTransferenciaModule } from './pago-transferencia/pago-transferencia.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { BancoModule } from './banco/banco.module';
import { TarifaModule } from './controller/tarifa.module';
import { FacturaModule } from './lista-factura/lista-factura.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    typeORMConfig,
    EventEmitterModule.forRoot(),
    PaymentinfoModule,PagoTransferenciaModule,PagoMovilModule,BancoModule,TarifaModule,FacturaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
