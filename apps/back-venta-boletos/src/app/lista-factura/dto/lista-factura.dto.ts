import { IsAlpha, IsDate, IsDecimal, IsNotEmpty, IsNumberString, IsNumber,  IsString, Length } from 'class-validator'
import { Type } from 'class-transformer'
import { ApiProperty } from '@nestjs/swagger'
export class CreateListaFacturas {

  @ApiProperty({example: '021345', description: 'Numero de Factura'})
  @IsNotEmpty()
  @IsNumberString()
  @Length(6, 6)
  NumFactura: string;

  @ApiProperty({example: '2025-01-21', description: 'Fecha de Emision'})
  @IsNotEmpty()
  @IsDate()
  FechaEmision: string;

  @ApiProperty({example:'0124', description: 'ID de Paymentinfo'})
  @IsNotEmpty()
  @IsNumber()
  PaymentinfoId: number; // ID de la relación con Paymentinfo
}
