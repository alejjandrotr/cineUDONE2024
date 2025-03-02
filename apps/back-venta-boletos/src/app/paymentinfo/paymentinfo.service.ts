import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Paymentinfo } from './paymentinfo.entity';
import { Repository } from 'typeorm';
import { CreatePaymentinfoDto } from './dto/create-paymentinfo.dto'
import { CorreoService } from './correo.service';
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';
import { UpdatePaymentinfoDto } from './dto/update-paymentinfo.dto';

@Injectable()
export class PaymentinfoService {

    constructor(@InjectRepository(Paymentinfo) private paymentinfoRepository: Repository<Paymentinfo>,
                private readonly correoService: CorreoService, 
                private eventEmitter: EventEmitter2){}

    async createPaymentinfo(paymentinfo: CreatePaymentinfoDto){
        try {
            const newPaymentinfo = this.paymentinfoRepository.create(paymentinfo);
            await this.paymentinfoRepository.save(newPaymentinfo);
            return newPaymentinfo;
        } catch (error) {
            console.error("Error:", error.message);
            return null;
        }        
    }

    getPaymentinfo(){
        return this.paymentinfoRepository.find({
            where: { estado: 'pendiente' } })
    }

    async updateEstado(id: number, paymentinfo: UpdatePaymentinfoDto){
        const existePaymentinfo = await this.paymentinfoRepository.findOne({ where: { id } });

        if (!existePaymentinfo)
            throw new NotFoundException(`Paymentinfo con ID ${id} no encontrado`);

        const updateEstado = Object.assign(existePaymentinfo, paymentinfo);
        this.eventEmitter.emit('enviar.correo', updateEstado);
        return this.paymentinfoRepository.save(updateEstado);
    }

    @OnEvent('enviar.correo')
    enviarCorreo(paymentData: Paymentinfo){
        const subject = `Pago ${paymentData.estado}`;
        const referencia = paymentData.referencia;
        const monto = paymentData.monto;
        const fecha = paymentData.fecha;
        const contexto = { monto, fecha, referencia };
        this.correoService.sendEmails(subject, paymentData.estado, contexto);
    }
}