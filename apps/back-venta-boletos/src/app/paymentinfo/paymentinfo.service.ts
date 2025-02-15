import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Paymentinfo } from './paymentinfo.entity';
import { Repository } from 'typeorm';
import { CreatePaymentinfoDto } from './dto/create-paymentinfo.dto'
import { CorreoService } from './correo.service';
import { MailerService } from '@nestjs-modules/mailer';



@Injectable()
export class PaymentinfoService {

    constructor(@InjectRepository(Paymentinfo) private paymentinfoRepository: Repository<Paymentinfo>,
                private readonly correoService: CorreoService){}

    createPaymentinfo(paymentinfo: CreatePaymentinfoDto){
        const newPaymentinfo = this.paymentinfoRepository.create(paymentinfo);
        this.paymentinfoRepository.save(newPaymentinfo)
        return this.paymentinfoCorfimado()
    }

    getPaymentinfo(){
        return this.paymentinfoRepository.find({
            where: { estado: 'Pendiente' } })
    }

    paymentinfoCorfimado(){
        const email = 'khristianhfs06@gmail.com'
        const subject = 'Pago Confirmado';
        const plantilla = "template"
        const name = 'khris'
        const referencia = '1234'
        const monto = '3.99'
        const fecha = '12/12/2024'
        const contexto = { name, monto, fecha, referencia };
        this.correoService.sendPaymentConfirmation(email, subject, plantilla, contexto);
    }
}
