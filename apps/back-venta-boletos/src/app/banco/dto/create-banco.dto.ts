import { IsNotEmpty, IsNumberString, IsString, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class CreateBancoDto{

    @ApiProperty({example: '0105', description: 'Codigo de la entidad bancaria'})
    @IsNotEmpty()
    @IsNumberString()
    @Length(4, 4)
    codigo: string;

    @ApiProperty({example: 'Banco Mercantil', description: 'Nombre del Banco'})
    @IsNotEmpty()
    @IsString()
    nombre: string;

}
