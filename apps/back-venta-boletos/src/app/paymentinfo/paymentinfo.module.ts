import { Module } from '@nestjs/common';
import { PaymentinfoController } from './paymentinfo.controller';
import { PaymentinfoService } from './paymentinfo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Paymentinfo } from './paymentinfo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Paymentinfo])],
  controllers: [PaymentinfoController],
  providers: [PaymentinfoService]
})
export class PaymentinfoModule {}
