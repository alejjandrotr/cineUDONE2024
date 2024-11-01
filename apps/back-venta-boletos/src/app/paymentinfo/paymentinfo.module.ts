import { Module } from '@nestjs/common';
import { PaymentinfoController } from './paymentinfo.controller';
import { PaymentinfoService } from './paymentinfo.service';

@Module({
  controllers: [PaymentinfoController],
  providers: [PaymentinfoService]
})
export class PaymentinfoModule {}
