import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Paymentinfo } from '../paymentinfo/paymentinfo.entity';
import { PagoTransferencia } from '../pago-transferencia/pago-transferencia.entity';
import { PagoMovil } from '../pago-movil/pago-movil.entity';
import { Factura } from '../lista-factura/lista-factura.entity';
import { Banco } from '../banco/banco.entity';

export const typeORMConfig = TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => ({
      type: 'postgres',
      url: configService.get<string>('DB_URL'),
      entities: [Banco,Paymentinfo,PagoTransferencia,PagoMovil,Factura],
      ssl: true,
      synchronize: true, // Solo para desarrollo, cambiar cuando se lanze a produccion
      autoLoadEntities: true,
      extra: {
        ssl: {
          rejectUnauthorized: false,
        },
      },
    })
  })