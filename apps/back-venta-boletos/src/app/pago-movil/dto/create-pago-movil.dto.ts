import { IsAlpha, IsDate, IsDecimal, IsNotEmpty, IsNumberString, IsString, Length } from 'class-validator'
import { Type } from 'class-transformer'
import { ApiProperty } from '@nestjs/swagger'
export class create_pago_movil{
  @ApiProperty({example: 'Banco Mercantil', description: 'Nombre de la entidad bancaria'})
  @IsNotEmpty()
  @IsString()
  @Length(3, 60)
  banco: string;

  @ApiProperty({example: '28567843', description: 'Identificacion Personal (ID)'})
  @IsNotEmpty()
  @IsNumberString()
  @Length(1, 15)
  cedula: string;

  @ApiProperty({example: '04123528885', description: 'Numero de telefono'})
  @IsNotEmpty()
  @IsNumberString()
  @Length(11, 11)
  numero_telef: string;
}
