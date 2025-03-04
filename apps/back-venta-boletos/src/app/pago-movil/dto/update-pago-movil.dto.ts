import { IsNotEmpty, IsNumberString, IsOptional, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class UpdatePagoMovilDto{

  @ApiProperty({example: '0102', description: 'Codigo de Banco'})
  @IsOptional()
  @IsNumberString()
  @Length(4, 4)
  codigoBanco?: string;

  @ApiProperty({example: '28567843', description: 'Identificacion Personal (ID)'})
  @IsOptional()
  @IsNumberString()
  @Length(1, 8)
  cedula?: string;

  @ApiProperty({example: '04123528885', description: 'Numero de telefono'})
  @IsOptional()
  @IsNumberString()
  @Length(11, 11)
  nroTelefono?: string;
}
