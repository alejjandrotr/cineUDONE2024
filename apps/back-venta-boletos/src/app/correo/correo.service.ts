import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { CreateUserDataDto } from './dto/CreateUserData.dto';

@Injectable()
export class CorreoService {
  constructor(private readonly mailerService: MailerService) {}

  async sendPaymentConfirmation(paymentDetails: any, userData: CreateUserDataDto) {
    await this.mailerService.sendMail({
      to: userData.email,
      subject: 'Pago Confirmado',
      html: `
      <p>Hola, Random</p>
      <p>Gracias por su pago. Aquí están los detalles de su transacción:</p>
      <ul>
        <li>Monto: 3.99</li>
        <li>Fecha: 12/12/2024</li>
        <li>Referencia de Transacción: 123456789</li>
      </ul>
      <p>¡Gracias por su preferencia!</p>
      ` 
      /*template: './payment-confirmation', // La ruta para la plantilla de correo
      context: { // Los datos que se pasarán a la plantilla
        name: userData.name,
        monto: paymentDetails.monto,
        fecha: paymentDetails.fecha,
        referencia: paymentDetails.referencia,
      },*/
    });
  }
}