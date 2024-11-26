import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'banco'})
export class Banco{
    @PrimaryColumn({unique: true})
    codigo: string;

    @Column()
    nombre: string;

    @OneToMany(() => Paymentinfo, paymentinfo => paymentinfo.banco_emisor)
    paymentinfos: Paymentinfo[];
}

@Entity({name: 'paymentinfo'})
export class Paymentinfo{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    referencia: string;

    @ManyToOne(() => Banco)
    @JoinColumn({ name: 'banco_codigo' })
    banco_emisor: Banco;

    @Column()
    banco_codigo: string;

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
        enum: ['Pendiente','Confirmado','Rechazado'],
        default: 'Pendiente'
    })
    estado: string;
}