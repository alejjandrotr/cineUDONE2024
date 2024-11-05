import { Injectable } from '@nestjs/common';

@Injectable()
export class PrecioService {
    private readonly precio = 3.00;

    montoTotal(cantidad: number): number {
        return this.precio * cantidad;
    }
}
