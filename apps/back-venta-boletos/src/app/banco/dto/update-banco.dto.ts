import { IsOptional, IsString, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class UpdateBancoDto{

    @ApiProperty({example: 'Mercantil', description: 'Nombre del Banco'})
    @IsOptional()
    @IsString()
    @Length(3, 60)
    nombre?: string;

}