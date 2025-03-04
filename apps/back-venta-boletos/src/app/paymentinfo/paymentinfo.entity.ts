import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Banco } from '../banco/banco.entity';
import { Factura } from '../lista-factura/lista-factura.entity';

@Entity({name: 'paymentinfo'})
export class Paymentinfo{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    referencia: string;

    @ManyToOne(() => Banco, (codigoBanco) => codigoBanco.paymentinfos)
    codigoBanco: string;

    @Column({
        type: 'enum',
        enum: ['Pago Movil', 'Transferencia']
    })
    metodo: string;

    @Column({type: 'date'})
    fecha: Date;

    @Column('decimal', { precision: 10, scale: 2 })
    monto: number;

    @Column({
        type: 'enum',
        enum: ['pendiente', 'confirmado', 'rechazado'],
        default: 'pendiente'
    })
    estado: string;

    @OneToMany(() => Factura, factura => factura.numFactura)
    facturas: Factura[];
}
