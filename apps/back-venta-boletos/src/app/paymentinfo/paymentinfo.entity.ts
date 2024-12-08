import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'paymentinfo'})
export class Paymentinfo{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    referencia: string;

    @Column()
    banco_emisor: string;

    @Column()
    metodo: string;

    @Column({type: 'date'})
    fecha: Date;

    @Column()
    monto: number;

    @Column({default: 'pendiente'})
    estado: string;
}