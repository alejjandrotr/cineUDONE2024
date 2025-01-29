import { Module } from '@nestjs/common';
import { ConfirmPaymentService } from './confirm-payment.service';
import { ConfirmPaymentController } from './confirm-payment.controller';

@Module({
  imports: [],
  controllers: [ConfirmPaymentController],
  providers: [ConfirmPaymentService],
})
export class ConfirmPaymentModule {}
