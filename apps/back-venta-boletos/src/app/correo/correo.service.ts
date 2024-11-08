import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { CreatePaymentDetailsDto } from './dto/CreatePaymentDetails.dto';

@Injectable()
export class CorreoService {
  constructor(private readonly mailerService: MailerService) {}

  async sendPaymentConfirmation(user: any, paymentDetails: CreatePaymentDetailsDto) {
    await this.mailerService.sendMail({
      to: user.email,
      subject: 'Confirmación de Pago',
      template: './payment-confirmation', // La ruta para la plantilla de correo
      context: { // Los datos que se pasarán a la plantilla
        name: user.name,
        monto: paymentDetails.monto,
        fecha: paymentDetails.fecha,
        referencia: paymentDetails.referencia,
      },
    });
  }
}