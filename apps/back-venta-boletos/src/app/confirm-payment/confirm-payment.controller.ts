import { Controller, Post, Patch, Param, Body } from '@nestjs/common';
import { ConfirmPaymentService } from './confirm-payment.service';
import { CreateConfirmPaymentDto } from './dto/create-confirm-pyament.dto';
import { UpdateConfirmPaymentDto } from './dto/update-confirm-payment.dto';

@Controller('confirm-payment')
export class ConfirmPaymentController {
  constructor(private readonly confirmPaymentService: ConfirmPaymentService) {}

  @Post()
  confirm(@Body() createConfirmPaymentDto: CreateConfirmPaymentDto): string {
    return this.confirmPaymentService.confirmPayment(createConfirmPaymentDto);
  }

  @Patch(':paymentId')
  update(@Param('paymentId') paymentId: string, @Body() updateConfirmPaymentDto: UpdateConfirmPaymentDto): string {
    return this.confirmPaymentService.updateConfirmation(paymentId, updateConfirmPaymentDto);
  }
}
