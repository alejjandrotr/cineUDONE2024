import { Controller, Get } from '@nestjs/common';
import { PrecioService } from './precio.service'

@Controller('precio')
export class PrecioController {
    constructor(private readonly precioService: PrecioService){}

    @Get()
    getPrecio(){
        return this.precioService.getPrecio();
    }

}
