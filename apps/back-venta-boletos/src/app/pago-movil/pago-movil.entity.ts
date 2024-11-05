import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'pagomovil'})
export class createpagomovil{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  banco: string;

  @Column()
  numero_telef: string;
}



//NOTA: LOS ARCHIVOS QUE SON .SPEC SON ARCHIVOS DE PRUEBA DE ARCHIVOS ARTERIORES, BASICAMENTE ES PARA SABER
// SI FUNCIONAN BIEN.
