import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'pago-transferencia' })
export class PagoTransferencia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  codigoBanco: string;

  @Column()
  cedula: string;

  @Column()
  nroCuenta: string;
}
