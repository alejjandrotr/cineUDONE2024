import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Banco, Paymentinfo } from './paymentinfo/paymentinfo.entity';
import { PaymentinfoModule } from './paymentinfo/paymentinfo.module';
import {createpagomovil} from './pago-movil/pago-movil.entity';
import {PagoTransferencia} from './pago-transferencia/pago-transferencia.entity'
import {pago_movil_module} from './pago-movil/pago-movil.module';
import { PagoTransferenciaModule } from './pago-transferencia/pago-transferencia.module';
import { PrecioModule } from './precio/precio.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USER'),
        password: configService.get<string>('DB_PASS'),
        database: configService.get<string>('DB_NAME'),
        entities: [Banco,Paymentinfo],
        synchronize: true
      }),
    }),
    PaymentinfoModule,
    pago_movil_module,
    PagoTransferenciaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
