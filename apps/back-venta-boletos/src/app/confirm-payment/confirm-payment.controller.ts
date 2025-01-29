// apps/back-venta-boletos/src/confirmpayment/confirm-payment.controller.ts

import { Controller, Post, Body } from '@nestjs/common';
import { ConfirmPaymentDto } from './dto/confirm-payment.dto';
import { ConfirmPaymentService } from './confirm-payment.service';

@Controller('confirmpayment')
export class ConfirmPaymentController {
  constructor(private readonly confirmPaymentService: ConfirmPaymentService) {}

  @Post()
  async confirmPayment(@Body() confirmPaymentDto: ConfirmPaymentDto) {
    return this.confirmPaymentService.confirmPayment(confirmPaymentDto);
  }
}
