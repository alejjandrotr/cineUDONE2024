import { IsAlpha, IsDate, IsDecimal, IsNotEmpty, IsNumberString, IsString, Length } from 'class-validator'
import { Type } from 'class-transformer'
import { ApiProperty } from '@nestjs/swagger'
export class CreatePagoTransferenciadto {

  @ApiProperty({example: 'Banco Venezuela', description: 'Nombre de la entidad bancaria'})
  @IsNotEmpty()
  @IsString()
  @Length(3, 60)
  banco: string;

  @ApiProperty({example: '01023473290654400007', description: 'Numero de cuenta del Banco'})
  @IsNotEmpty()
  @IsString()
  @Length(20,20)
  NumeroCuenta: string;

  @ApiProperty({example: '28567843', description: 'Identificacion Personal (ID)'})
  @IsNotEmpty()
  @IsNumberString()
  @Length(1, 15)
  cedula: string;
}
