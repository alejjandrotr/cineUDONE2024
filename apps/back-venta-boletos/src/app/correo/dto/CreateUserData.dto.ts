import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class CreateUserDataDto {
    @ApiProperty({example: 'Fulanito', description: 'Nombre del Usuario'})
    @IsNotEmpty()
    @IsString()
    @Length(3,30)
    name: string;

    @ApiProperty({example: 'fulanito@gmail.com', description: 'Correo electronico del usuario'})
    @IsNotEmpty()
    @IsEmail()
    email: string;
}