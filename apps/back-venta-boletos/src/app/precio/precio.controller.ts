import { Controller, Get, Put, Body } from '@nestjs/common';
import { PrecioService } from './precio.service';

@Controller('precio')
export class PrecioController {
    constructor(private readonly precioService: PrecioService) {}

    @Get()
    getPrecio() {
        return { precio: this.precioService.getPrecio() };
    }

    @Put()
    updatePrecio(@Body() body: { nuevoPrecio: number }) {
        this.precioService.setPrecio(body.nuevoPrecio);
        return { message: 'Precio actualizado correctamente' };
    }
}
