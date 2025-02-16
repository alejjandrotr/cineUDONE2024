import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Paymentinfo } from './paymentinfo.entity';
import { Repository } from 'typeorm';
import { CreatePaymentinfoDto } from './dto/create-paymentinfo.dto'
import { CorreoService } from './correo.service';
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';


@Injectable()
export class PaymentinfoService {

    constructor(@InjectRepository(Paymentinfo) private paymentinfoRepository: Repository<Paymentinfo>,
                private readonly correoService: CorreoService, 
                private eventEmitter: EventEmitter2){}

    createPaymentinfo(paymentinfo: CreatePaymentinfoDto){
        const newPaymentinfo = this.paymentinfoRepository.create(paymentinfo);
        this.paymentinfoRepository.save(newPaymentinfo);
        this.eventEmitter.emit('paymentinfo.created', newPaymentinfo);
        return newPaymentinfo;
    }

    getPaymentinfo(){
        return this.paymentinfoRepository.find({
            where: { estado: 'Pendiente' } })
    }

    editarEstado(id: number, paymentinfo: any){
        
    }

    @OnEvent('paymentinfo.created')
    paymentinfoPendiente(paymentData: Paymentinfo){
        const email = 'khristianhfs06@gmail.com'
        const name = 'khris'
        const subject = 'Pago en proceso de confirmación';
        const plantilla = "template"
        const referencia = paymentData.referencia
        const monto = paymentData.monto
        const fecha = paymentData.fecha
        const contexto = { name, monto, fecha, referencia };
        this.correoService.sendPaymentConfirmation(email, subject, plantilla, contexto);
    }
}
