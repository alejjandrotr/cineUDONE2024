import { TypeOrmModuleOptions } from '@nestjs/typeorm'; // Importa TypeOrmModuleOptions
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Movie } from '../../moviesAgg/entity/movie.entity'; // Asegúrate de que la ruta sea correcta

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
    entities: [Movie], // Asegúrate de que la entidad Movie esté correctamente importada
    synchronize: true, // Solo para desarrollo. En producción, usa migraciones.
  }),
};
