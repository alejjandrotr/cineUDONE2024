import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { typeORMConfig } from './config/typeorm.config';
import { PaymentinfoModule } from './paymentinfo/paymentinfo.module';
import { pago_movil_module } from './pago-movil/pago-movil.module';
import { PagoTransferenciaModule } from './pago-transferencia/pago-transferencia.module';
import { PrecioModule } from './precio/precio.module';
import { CorreoModule } from './correo/correo.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    typeORMConfig,
    PaymentinfoModule, PrecioModule,PagoTransferenciaModule,pago_movil_module,CorreoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
