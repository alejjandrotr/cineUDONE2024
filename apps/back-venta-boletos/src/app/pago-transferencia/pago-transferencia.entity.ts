import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'pago-transferencia' })
export class PagoTransferencia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  banco: string;

  @Column()
  nro_cuenta: string;

  @Column()
  cedula: string;
}
