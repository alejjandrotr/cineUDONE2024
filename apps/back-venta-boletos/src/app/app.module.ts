import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Paymentinfo } from './paymentinfo/paymentinfo.entity';
import { PaymentinfoModule } from './paymentinfo/paymentinfo.module';
import { PrecioModule } from './precio/precio.module';
import { CorreoModule } from './correo/correo.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'teamverdemysql',
      database: 'cine',
      entities: [Paymentinfo],
      synchronize: true
    }),
    PaymentinfoModule, PrecioModule, CorreoModule],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
