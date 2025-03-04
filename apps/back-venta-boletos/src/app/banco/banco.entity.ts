import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Paymentinfo } from '../paymentinfo/paymentinfo.entity';
import { PagoMovil } from '../pago-movil/pago-movil.entity';
import { PagoTransferencia } from '../pago-transferencia/pago-transferencia.entity';

@Entity({name: 'banco'})
export class Banco{
    @PrimaryColumn({unique: true})
    codigo: string;

    @Column()
    nombre: string;

    @Column( {nullable: true} )
    logo: string;

    @OneToMany(() => Paymentinfo, paymentinfo => paymentinfo.codigoBanco)
    paymentinfos: Paymentinfo[];

    @OneToMany(() => PagoMovil, pagomovil => pagomovil.codigoBanco)
    pagomoviles: PagoMovil[];

    @OneToMany(() => PagoTransferencia, transferencia => transferencia.codigoBanco)
    transferencias: PagoTransferencia[];
}