import { Injectable } from '@nestjs/common';

@Injectable()
export class PrecioService {
    private precioGeneral = 3.99; // Valor inicial

    getPrecio(): number {
        return this.precioGeneral;
    }

    setPrecio(nuevoPrecio: number): void {
        this.precioGeneral = nuevoPrecio;
    }
}
