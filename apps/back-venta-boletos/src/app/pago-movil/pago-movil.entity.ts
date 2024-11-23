import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'pagomovil'})
export class createpagomovil{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  banco: string;

  @Column()
  codigo_banco: string;

  @Column()
  cedula: string;

  @Column()
  numero_telef: string;
}

