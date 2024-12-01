import { IsAlpha, IsDate, IsDecimal, IsNotEmpty, IsNumberString, IsString, Length } from 'class-validator'
import { Type } from 'class-transformer'
import { ApiProperty } from '@nestjs/swagger'

export class CreatePaymentinfoDto{
    @ApiProperty({example: '1234567890', description: 'Referencia de la transaccion bancaria'})
    @IsNotEmpty()
    @IsNumberString()
    @Length(4, 20)
    referencia: string;

    @ApiProperty({example: 'Banco Mercantil', description: 'Nombre de la entidad bancaria'})
    @IsNotEmpty()
    @IsString()
    @Length(3, 60)
    banco_emisor: string;

    @ApiProperty({example: 'Pago Móvil', description: 'Tipo de Método de Pago'})
    @IsNotEmpty()
    @IsString()
    @Length(3, 20)
    metodo: string;

    @ApiProperty({example: '2024-11-07', description: 'Fecha de la realización del Pago'})
    @IsNotEmpty()
    @IsDate()
    @Type(() => Date)
    fecha: Date;

    @ApiProperty({example: '2.99', description: 'Monto pagado'})
    @IsNotEmpty()
    @IsDecimal()
    monto: number;

    @ApiProperty({example: 'Pendiente', description: 'Estado del pago (Pendiente, Confirmado, Rechazado'})
    @IsNotEmpty()
    @IsAlpha()
    @Length(2, 10)
    estado: string;
}
