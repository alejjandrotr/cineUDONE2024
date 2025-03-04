import { Module } from '@nestjs/common';
import { PaymentinfoController } from './paymentinfo.controller';
import { PaymentinfoService } from './paymentinfo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Paymentinfo } from './paymentinfo.entity';
import { CorreoService } from './correo.service';

@Module({
  imports: [TypeOrmModule.forFeature([Paymentinfo])],
  controllers: [PaymentinfoController],
  providers: [PaymentinfoService, CorreoService]
})
export class PaymentinfoModule {}
