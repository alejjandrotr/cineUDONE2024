import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Paymentinfo } from '../paymentinfo/paymentinfo.entity';

@Entity({ name: 'facturas' })
export class Factura {

  @PrimaryGeneratedColumn()
  Num_Factura: number;

  @Column('date')
  Fecha_Emision: Date;

  @Column('decimal', { precision: 10, scale: 2 })
  Total_Monto: number;

  @ManyToOne(() => Paymentinfo)   //conexion con Paymentinfo
  @JoinColumn({ name: 'id' })
  Paymentinfo: Paymentinfo;
}
