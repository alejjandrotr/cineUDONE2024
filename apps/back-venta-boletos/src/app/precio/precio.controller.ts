import { Body, Controller, Post } from '@nestjs/common';
import { PrecioService } from './precio.service'

@Controller('precio')
export class PrecioController {
    constructor(private readonly precioService: PrecioService){}

    @Post('cant')
    montoTotal(@Body('cantidad') cantidad: number): {total: number}{
        const total = this.precioService.montoTotal(cantidad);
        return { total };
    }

}
