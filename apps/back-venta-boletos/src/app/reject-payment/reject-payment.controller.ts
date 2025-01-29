import { Controller, Post, Patch, Param, Body } from '@nestjs/common';
import { RejectPaymentService } from './reject-payment.service';
import { CreateRejectPaymentDto } from './dto/create-reject-payment.dto';
import { UpdateRejectPaymentDto } from './dto/update-reject-payment.dto';

@Controller('reject-payment')
export class RejectPaymentController {
  constructor(private readonly rejectPaymentService: RejectPaymentService) {}

  @Post()
  reject(@Body() createRejectPaymentDto: CreateRejectPaymentDto): string {
    return this.rejectPaymentService.rejectPayment(createRejectPaymentDto);
  }

  @Patch(':paymentId')
  update(@Param('paymentId') paymentId: string, @Body() updateRejectPaymentDto: UpdateRejectPaymentDto): string {
    return this.rejectPaymentService.updateRejection(paymentId, updateRejectPaymentDto);
  }
}
