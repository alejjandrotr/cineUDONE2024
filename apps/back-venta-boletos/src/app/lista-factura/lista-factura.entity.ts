import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Paymentinfo } from '../paymentinfo/paymentinfo.entity';

@Entity({ name: 'facturas' })
export class Factura {

  @PrimaryGeneratedColumn()
  numFactura: number;

  @CreateDateColumn({ type: 'timestamp' })
  fechaEmision: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  fechaActualizacion: Date;
  
  @Column({
    type: 'enum',
    enum: ['Pago Movil', 'Transferencia']
  })
  metodoPago: string;

  @Column('decimal', { precision: 10, scale: 2 })
  totalMonto: number;

  @ManyToOne(() => Paymentinfo, (paymentinfoId) => paymentinfoId.facturas)   //conexion con Paymentinfo
  paymentinfoId: number;

}
