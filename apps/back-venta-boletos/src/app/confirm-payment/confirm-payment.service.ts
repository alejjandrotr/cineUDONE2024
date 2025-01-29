// apps/back-venta-boletos/src/confirmpayment/confirm-payment.service.ts

import { Injectable } from '@nestjs/common';
import { ConfirmPaymentDto } from './dto/confirm-payment.dto';

@Injectable()
export class ConfirmPaymentService {
  async confirmPayment(confirmPaymentDto: ConfirmPaymentDto): Promise<any> {
    const { paymentId, amount, currency } = confirmPaymentDto;
    // Lógica para confirmar el pago
    console.log(`Payment confirmed: ${paymentId}, Amount: ${amount}, Currency: ${currency}`);

    return { message: 'Pago confirmado', paymentId, amount, currency };
  }
}
