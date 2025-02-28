import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'pagomovil'})
export class createpagomovil{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  codigoBanco: string;

  @Column()
  cedula: string;

  @Column()
  nroTelefono: string;
}

