import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Banco, Paymentinfo } from '../paymentinfo/paymentinfo.entity';
import { PagoTransferencia } from '../pago-transferencia/pago-transferencia.entity';
import { createpagomovil } from '../pago-movil/pago-movil.entity';

export const typeORMConfig = TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => ({
      type: 'postgres',
      url: configService.get<string>('DB_URL'),
      entities: [Banco,Paymentinfo,PagoTransferencia,createpagomovil],
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