import { IsAlpha, IsDate, IsEnum, IsNotEmpty, IsNumber, IsNumberString, IsString, Length } from 'class-validator'
import { Type } from 'class-transformer'
import { ApiProperty } from '@nestjs/swagger'

export class CreatePaymentinfoDto{
    @ApiProperty({example: '1234567890', description: 'Referencia de la transaccion bancaria'})
    @IsNotEmpty()
    @IsNumberString()
    @Length(4, 20)
    referencia: string;

    @ApiProperty({example: '0105', description: 'Codigo de la entidad bancaria'})
    @IsNotEmpty()
    @IsNumberString()
    @Length(4, 4)
    bancoCodigo: string;

    @ApiProperty({example: 'Pago Móvil', description: 'Tipo de Método de Pago'})
    @IsNotEmpty()
    @IsString()
    @IsEnum(['Pago Movil', 'Transferencia'])
    metodo: string;

    @ApiProperty({example: '2024-11-07', description: 'Fecha de la realización del Pago'})
    @IsNotEmpty()
    @IsDate()
    @Type(() => Date)
    fecha: Date;

    @ApiProperty({example: '3.99', description: 'Monto pagado'})
    @IsNotEmpty()
    @IsNumber()
    monto: number;

    @ApiProperty({example: 'Confirmado', description: 'Estado del pago (Pendiente, Confirmado, Rechazado'})
    @IsNotEmpty()
    @IsAlpha()
    @IsEnum(['Pendiente', 'Corfirmado', 'Rechazado'])
    estado: string = 'Pendiente';
}