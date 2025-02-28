import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Paymentinfo } from './paymentinfo.entity';
import { Repository } from 'typeorm';
import { CreatePaymentinfoDto } from './dto/create-paymentinfo.dto'

@Injectable()
export class PaymentinfoService {

    constructor(@InjectRepository(Paymentinfo) private paymentinfoRepository: Repository<Paymentinfo>){}

    createPaymentinfo(paymentinfo: CreatePaymentinfoDto){
        const newPaymentinfo = this.paymentinfoRepository.create(paymentinfo)
        return this.paymentinfoRepository.save(newPaymentinfo)
    }

    getPaymentinfo(){
        return this.paymentinfoRepository.find({
<<<<<<< HEAD
            where: { estado: 'pendiente' } })
=======
            where: { estado: 'Pendiente' } })
>>>>>>> e05e76b859b676e9a568297baf26dd44680b3a7f
    }
}
