//import { IsDate, IsDecimal, IsNotEmpty, IsNumberString, Length } from 'class-validator'
//import { ApiProperty } from '@nestjs/swagger'

export class CreatePaymentDetailsDto {
    monto: Number;
    fecha: String;
    referencia: String;
}