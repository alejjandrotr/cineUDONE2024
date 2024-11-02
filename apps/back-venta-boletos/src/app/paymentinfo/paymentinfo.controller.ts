import { Controller, Post, Body } from '@nestjs/common';
import { CreatePaymentinfoDto } from './dto/create-paymentinfo.dto';
import { PaymentinfoService } from './paymentinfo.service';

@Controller('paymentinfo')
export class PaymentinfoController {
    constructor(private paymentinfoService: PaymentinfoService){}

    @Post()
    createPaymentinfo(@Body() newPaymentinfo: CreatePaymentinfoDto){
        return this.paymentinfoService.createPaymentinfo(newPaymentinfo);
    }
}
