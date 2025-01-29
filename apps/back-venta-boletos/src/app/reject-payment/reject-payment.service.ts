import { Injectable } from '@nestjs/common';
import { CreateRejectPaymentDto } from './dto/create-reject-payment.dto';
import { UpdateRejectPaymentDto } from './dto/update-reject-payment.dto';

@Injectable()
export class RejectPaymentService {
  rejectPayment(createRejectPaymentDto: CreateRejectPaymentDto): string {
    // Lógica para rechazar el pago
    return `Pago con ID ${createRejectPaymentDto.paymentId} rechazado por la razón ${createRejectPaymentDto.reason}`;
  }

  updateRejection(paymentId: string, updateRejectPaymentDto: UpdateRejectPaymentDto): string {
    // Lógica para actualizar el estado del rechazo
    return `Rechazo de pago con ID ${paymentId} actualizado a estado ${updateRejectPaymentDto.status}`;
  }
}
