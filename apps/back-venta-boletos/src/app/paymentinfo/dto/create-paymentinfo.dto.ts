<<<<<<< HEAD
import { IsAlpha, IsDate, IsDecimal, IsNotEmpty, IsNumberString, IsString, Length } from 'class-validator'
=======
import { IsAlpha, IsDate, IsEnum, IsNotEmpty, IsNumber, IsNumberString, IsString, Length } from 'class-validator'
>>>>>>> e05e76b859b676e9a568297baf26dd44680b3a7f
import { Type } from 'class-transformer'
import { ApiProperty } from '@nestjs/swagger'

export class CreatePaymentinfoDto{
    @ApiProperty({example: '1234567890', description: 'Referencia de la transaccion bancaria'})
    @IsNotEmpty()
    @IsNumberString()
    @Length(4, 20)
    referencia: string;

<<<<<<< HEAD
    @ApiProperty({example: 'Banco Mercantil', description: 'Nombre de la entidad bancaria'})
    @IsNotEmpty()
    @IsString()
    @Length(3, 60)
    banco_emisor: string;
=======
    @ApiProperty({example: '0105', description: 'Codigo de la entidad bancaria'})
    @IsNotEmpty()
    @IsNumberString()
    @Length(4, 4)
    bancoCodigo: string;
>>>>>>> e05e76b859b676e9a568297baf26dd44680b3a7f

    @ApiProperty({example: 'Pago Móvil', description: 'Tipo de Método de Pago'})
    @IsNotEmpty()
    @IsString()
<<<<<<< HEAD
    @Length(3, 20)
=======
    @IsEnum(['Pago Movil', 'Transferencia'])
>>>>>>> e05e76b859b676e9a568297baf26dd44680b3a7f
    metodo: string;

    @ApiProperty({example: '2024-11-07', description: 'Fecha de la realización del Pago'})
    @IsNotEmpty()
    @IsDate()
    @Type(() => Date)
    fecha: Date;

<<<<<<< HEAD
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
=======
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
>>>>>>> e05e76b859b676e9a568297baf26dd44680b3a7f
