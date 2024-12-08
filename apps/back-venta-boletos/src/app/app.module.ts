import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config'
import { PaymentinfoModule } from './paymentinfo/paymentinfo.module';
import { PrecioModule } from './precio/precio.module';
import { typeORMConfig } from './config/typeorm.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    typeORMConfig,
    PaymentinfoModule, PrecioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
