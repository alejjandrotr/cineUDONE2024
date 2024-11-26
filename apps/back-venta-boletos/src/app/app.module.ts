import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Banco, Paymentinfo } from './paymentinfo/paymentinfo.entity';
import { PaymentinfoModule } from './paymentinfo/paymentinfo.module';
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
    PaymentinfoModule, PrecioModule],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
