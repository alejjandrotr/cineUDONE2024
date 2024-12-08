import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Factura } from './lista-factura.entity';
import { Paymentinfo } from '../paymentinfo/paymentinfo.entity';

@Injectable()
export class FacturaService {
  constructor(
    @InjectRepository(Factura)
    private readonly facturaRepository: Repository<Factura>,
    @InjectRepository(Paymentinfo)
    private readonly paymentinfoRepository: Repository<Paymentinfo>,
  ) {}

  async CrearFactura(facturaData: Partial<Factura>): Promise<Factura> {
    // Validar que el Paymentinfo_id existe
    const paymentinfo = await this.paymentinfoRepository.findOne({
      where: { id: facturaData.Paymentinfo.id },
    });

    if (!paymentinfo) {
      throw new NotFoundException(
        `No se encontró un registro de Paymentinfo con el id ${facturaData.Paymentinfo.id}`,
      );
    }

    const nuevaFactura = this.facturaRepository.create({
      ...facturaData,
      Paymentinfo: paymentinfo,
    });

    return this.facturaRepository.save(nuevaFactura);
  }

  async listarFacturas(): Promise<Factura[]> {
    return this.facturaRepository.find({ relations: ['Paymentinfo'] });
  }
}
