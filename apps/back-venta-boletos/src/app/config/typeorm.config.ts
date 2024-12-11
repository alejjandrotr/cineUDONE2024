import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Banco, Paymentinfo } from '../paymentinfo/paymentinfo.entity';
import { PagoTransferencia } from '../pago-transferencia/pago-transferencia.entity';
import { createpagomovil } from '../pago-movil/pago-movil.entity';

export const typeORMConfig = TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => ({
      type: 'mysql',
      host: configService.get<string>('DB_HOST'),
      port: configService.get<number>('DB_PORT'),
      username: configService.get<string>('DB_USER'),
      password: configService.get<string>('DB_PASS'),
      database: configService.get<string>('DB_NAME'),
      entities: [Banco,Paymentinfo,PagoTransferencia,createpagomovil],
      synchronize: true
    })
  })