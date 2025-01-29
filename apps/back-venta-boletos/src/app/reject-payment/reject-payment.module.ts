import { Module } from '@nestjs/common';
import { RejectPaymentService } from './reject-payment.service';
import { RejectPaymentController } from './reject-payment.controller';

@Module({
  imports: [],
  controllers: [RejectPaymentController],
  providers: [RejectPaymentService],
})
export class RejectPaymentModule {}
