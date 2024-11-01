import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({name: 'paymentinfo'})
export class Paymentinfo{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    referencia: string;

    @Column()
    banco_emisor: string;

    @Column()
    metodo_pago: String;

    @Column({type: 'date'})
    fecha_pago: Date;

    @Column()
    monto_pagado: number;

    @Column({default: 'pendiente'})
    estado_pago: string;

}