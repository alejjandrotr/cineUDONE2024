import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Movie } from '../../moviesAgg/entity/movie.entity';
import { Funcion } from '../../funcionAgg/entity/funcion.entity';

export const typeORMConfig = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (configService: ConfigService): Promise<TypeOrmModuleOptions> => ({
    type: 'mysql',
    host: configService.get<string>('DB_HOST'),
    port: configService.get<number>('DB_PORT'),
    username: configService.get<string>('DB_USER'),
    password: configService.get<string>('DB_PASS'),
    database: configService.get<string>('DB_NAME'),
    entities: [Movie, Funcion], // Asegúrate de incluir ambas entidades
    synchronize: true, // Solo para desarrollo. En producción, usa migraciones.
    autoLoadEntities: true, // Carga automáticamente las entidades registradas en módulos
  }),
};
