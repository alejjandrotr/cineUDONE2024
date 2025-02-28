import { IsNotEmpty, IsString, IsInt, IsArray, ValidateNested, IsDateString } from 'class-validator';
import { Type } from 'class-transformer';

class ScheduleItem {
  @IsNotEmpty({ message: 'La fecha es obligatoria' })
  @IsString()
  date: string ='' ;

  @IsNotEmpty({ message: 'La sala es obligatoria' })
  @IsString()
  room: string ='';
}

export class CreateFuncionDto {
  @IsNotEmpty({ message: 'El horario de inicio es obligatorio' })
  @IsDateString()
  horarioInicio: string = '';

  @IsNotEmpty({ message: 'El horario de fin es obligatorio' })
  @IsDateString()
  horarioFin: string = '';

  @IsNotEmpty({ message: 'La sala es obligatoria' })
  @IsString()
  sala: string = '';

  @IsNotEmpty({ message: 'El ID de la película es obligatorio' })
  @IsInt()
  movieId: number = 0;

  @IsNotEmpty({ message: 'El horario es obligatorio' })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ScheduleItem)
  schedule: ScheduleItem[] = [];
}
