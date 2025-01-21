<<<<<<< HEAD
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
=======
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'banco'})
export class Banco{
    @PrimaryColumn({unique: true})
    codigo: string;

    @Column()
    nombre: string;

    @OneToMany(() => Paymentinfo, paymentinfo => paymentinfo.bancoCodigo)
    paymentinfos: Paymentinfo[];
}
>>>>>>> e05e76b859b676e9a568297baf26dd44680b3a7f

@Entity({name: 'paymentinfo'})
export class Paymentinfo{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    referencia: string;

<<<<<<< HEAD
    @Column()
    banco_emisor: string;

    @Column()
=======
    @ManyToOne(() => Banco, (bancoCodigo) => bancoCodigo.paymentinfos)
    bancoCodigo: string;

    @Column({
        type: 'enum',
        enum: ['Pago Movil', 'Transferencia']
    })
>>>>>>> e05e76b859b676e9a568297baf26dd44680b3a7f
    metodo: string;

    @Column({type: 'date'})
    fecha: Date;

<<<<<<< HEAD
    @Column()
    monto: number;

    @Column({default: 'pendiente'})
=======
    @Column('decimal', { precision: 10, scale: 2 })
    monto: number;

    @Column({
        type: 'enum',
        enum: ['Pendiente','Confirmado','Rechazado'],
        default: 'Pendiente'
    })
>>>>>>> e05e76b859b676e9a568297baf26dd44680b3a7f
    estado: string;
}