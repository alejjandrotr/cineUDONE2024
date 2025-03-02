import { IsAlpha, IsDate, IsEnum, IsNotEmpty, IsNumber, IsNumberString, IsOptional, IsString, Length } from 'class-validator'
import { Type } from 'class-transformer'
import { ApiProperty } from '@nestjs/swagger'

export class UpdatePaymentinfoDto{
    @ApiProperty({example: '1234567890', description: 'Referencia de la transaccion bancaria'})
    @IsOptional()
    @IsNumberString()
    @Length(4, 20)
    referencia?: string;

    @ApiProperty({example: '0105', description: 'Codigo de la entidad bancaria'})
    @IsOptional()
    @IsNumberString()
    @Length(4, 4)
    bancoCodigo?: string;

    @ApiProperty({example: 'Pago Movil', description: 'Tipo de Método de Pago'})
    @IsOptional()
    @IsString()
    @IsEnum(['Pago Movil', 'Transferencia'])
    metodo?: string;

    @ApiProperty({example: '2024-11-07', description: 'Fecha de la realización del Pago'})
    @IsOptional()
    @IsDate()
    @Type(() => Date)
    fecha?: Date;

    @ApiProperty({example: '3.99', description: 'Monto pagado'})
    @IsOptional()
    @IsNumber()
    monto?: number;

    @ApiProperty({example: 'confirmado', description: 'Estado del pago (pendiente, confirmado, rechazado'})
    @IsNotEmpty()
    @IsAlpha()
    @IsEnum(['pendiente', 'confirmado', 'rechazado'])
    estado: string;
}