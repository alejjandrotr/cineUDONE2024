import { Body, Controller, Post } from '@nestjs/common';
import { CorreoService } from './correo.service';
import { CreatePaymentDetailsDto } from './dto/CreatePaymentDetails.dto';

@Controller('payments')
export class CorreoController {
  constructor(private readonly correoService: CorreoService) {}

  @Post('confirm')
  async confirmPayment(@Body() paymentDetails: CreatePaymentDetailsDto) {
    const user = { email: 'khristianhfs06@gmail.com', name: 'Khris' };
    await this.correoService.sendPaymentConfirmation(user, paymentDetails);
    return 'Pago confirmado y correo enviado';
  }
}
