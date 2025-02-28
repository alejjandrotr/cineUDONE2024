import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Factura } from './lista-factura.entity';
import { Paymentinfo } from '../paymentinfo/paymentinfo.entity';
import { CreateListaFacturas } from './dto/lista-factura.dto';

@Injectable()
export class FacturaService {
  constructor(
    @InjectRepository(Factura)
    private readonly facturaRepository: Repository<Factura>,
    @InjectRepository(Paymentinfo)
    private readonly paymentinfoRepository: Repository<Paymentinfo>,
  ) {}

  // Crear una nueva factura
  async CrearFactura(facturaData: CreateListaFacturas): Promise<Factura> {
    // Validar que el PaymentinfoId existe
    const paymentinfo = await this.paymentinfoRepository.findOne({
      where: { id: facturaData.PaymentinfoId },
    });

    if (!paymentinfo) {
      throw new NotFoundException(
        `No se encontró un registro de Paymentinfo con el id ${facturaData.PaymentinfoId}`,
      );
    }

    // Crear la nueva factura
    const nuevaFactura = this.facturaRepository.create({
      Num_Factura: parseInt(facturaData.NumFactura, 10), // Convertir string a número
      Fecha_Emision: facturaData.FechaEmision, // Directamente del DTO
      Paymentinfo: paymentinfo, // Objeto relacionado
    });

    // Guardar y devolver la factura
    return this.facturaRepository.save(nuevaFactura);
  }

  // Listar todas las facturas con la relación Paymentinfo
  async listarFacturas(): Promise<Factura[]> {
    return this.facturaRepository.find({ relations: ['Paymentinfo'] });
  }
}
