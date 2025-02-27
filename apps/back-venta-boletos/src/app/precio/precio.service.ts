import { Injectable } from '@nestjs/common';

@Injectable()
export class PrecioService {
    private readonly precioGeneral: number = 3.99;

    getPrecio(){
        return this.precioGeneral;
    }
}