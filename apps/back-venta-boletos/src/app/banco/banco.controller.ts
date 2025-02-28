import { Body, Controller, Get, Post } from '@nestjs/common';
import { BancoService } from './banco.service';
import { CreateBancoDto } from './dto/create-banco.dto';

@Controller('banco')
export class BancoController {
    constructor(private bancoService: BancoService){}
    
        @Post()
        createPaymentinfo(@Body() newBanco: CreateBancoDto){
            return this.bancoService.createBanco(newBanco);
        }
    
        @Get()
        getPaymentinfo(){
            return this.bancoService.getBanco();
        }
}
