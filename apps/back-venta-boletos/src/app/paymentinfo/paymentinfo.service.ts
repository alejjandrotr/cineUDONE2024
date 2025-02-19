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
        return newPaymentinfo;
    }

    getPaymentinfo(){
        return this.paymentinfoRepository.find({
            where: { estado: 'Pendiente' } })
    }

    updateEstado(id: number, paymentinfo: any){
       const newPaymentinfo = this.paymentinfoRepository.update({id}, paymentinfo);
        if(paymentinfo.estado == "Confirmado")
            this.eventEmitter.emit('enviar.correo', newPaymentinfo, "confirmado");
        else if(paymentinfo.estado == "Rechazado")
            this.eventEmitter.emit('enviar.correo', newPaymentinfo, "rechazado");
        return newPaymentinfo;
    }

    @OnEvent('enviar.correo')
    enviarCorreo(paymentData: Paymentinfo, plantilla: string){
        const subject = `Pago ${plantilla}`;
        const referencia = paymentData.referencia;
        const monto = paymentData.monto;
        const fecha = paymentData.fecha;
        const contexto = { monto, fecha, referencia };
        this.correoService.sendEmails(subject, plantilla, contexto);
    }
}