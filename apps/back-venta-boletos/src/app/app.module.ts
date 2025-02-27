import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PaymentinfoModule } from './paymentinfo/paymentinfo.module';
import { PagoMovilModule } from './pago-movil/pago-movil.module';
import { PagoTransferenciaModule } from './pago-transferencia/pago-transferencia.module';
import { PrecioModule } from './precio/precio.module';
import { typeORMConfig } from './config/typeorm.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    typeORMConfig,
    PaymentinfoModule,PrecioModule,PagoTransferenciaModule,PagoMovilModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
