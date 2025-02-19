import { Controller, Post, Body, Get, Patch, Param, ParseIntPipe } from '@nestjs/common';
import { CreatePaymentinfoDto } from './dto/create-paymentinfo.dto';
import { UpdatePaymentinfoDto } from './dto/update-paymentinfo.dto';
import { PaymentinfoService } from './paymentinfo.service';

@Controller('paymentinfo')
export class PaymentinfoController {
    constructor(private paymentinfoService: PaymentinfoService){}

    @Post()
    createPaymentinfo(@Body() newPaymentinfo: CreatePaymentinfoDto){
        return this.paymentinfoService.createPaymentinfo(newPaymentinfo);
    }

    @Get()
    getPaymentinfo(){
        return this.paymentinfoService.getPaymentinfo();
    }

    @Patch(':id')
    updatePaymentifo(@Param('id', ParseIntPipe) id: number, @Body() paymentinfo: UpdatePaymentinfoDto){
        return this.paymentinfoService.updateEstado(id,paymentinfo); 
    }
}
