import { Body, Controller, Post } from '@nestjs/common';
import { CorreoService } from './correo.service';
import { CreateUserDataDto } from './dto/CreateUserData.dto';

@Controller('email')
export class CorreoController {
  constructor(private readonly correoService: CorreoService) {}

  @Post('confirm')
  async confirmPayment(@Body() userData: CreateUserDataDto) {
    const paymentDetails = { monto: 3.99, fecha: '12/12/2024', referencia: '123456789'};
    await this.correoService.sendPaymentConfirmation(paymentDetails, userData);
    return 'Pago confirmado y correo enviado';
  }
}
