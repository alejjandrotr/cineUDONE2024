import { Injectable } from '@nestjs/common';
import { CreateConfirmPaymentDto } from './dto/create-confirm-pyament.dto';
import { UpdateConfirmPaymentDto } from './dto/update-confirm-payment.dto';

@Injectable()
export class ConfirmPaymentService {
  confirmPayment(createConfirmPaymentDto: CreateConfirmPaymentDto): string {
    // Lógica para confirmar el pago
    return `Pago con ID ${createConfirmPaymentDto.paymentId} de monto ${createConfirmPaymentDto.amount} ${createConfirmPaymentDto.currency} confirmado`;
  }

  updateConfirmation(paymentId: string, updateConfirmPaymentDto: UpdateConfirmPaymentDto): string {
    // Lógica para actualizar el estado del pago
    return `Pago con ID ${paymentId} actualizado a estado ${updateConfirmPaymentDto.status}`;
  }
}
