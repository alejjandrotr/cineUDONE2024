export class CreatePaymentinfoDto{
    referencia: string;
    banco_emisor: string;
    metodo: string;
    fecha: Date;
    monto: number;
    estado: string;
}