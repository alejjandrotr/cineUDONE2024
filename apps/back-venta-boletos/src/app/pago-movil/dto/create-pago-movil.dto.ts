import { IsNotEmpty, IsNumberString, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
export class create_pago_movil{

  @ApiProperty({example: '0102', description: 'Codigo de Banco'})
  @IsNotEmpty()
  @IsNumberString()
  @Length(1, 4)
  codigoBanco: string;

  @ApiProperty({example: '28567843', description: 'Identificacion Personal (ID)'})
  @IsNotEmpty()
  @IsNumberString()
  @Length(1, 15)
  cedula: string;

  @ApiProperty({example: '04123528885', description: 'Numero de telefono'})
  @IsNotEmpty()
  @IsNumberString()
  @Length(11, 11)
  nroTelefono: string;
}
