import { Injectable } from '@nestjs/common';
import { CreateTicketSaleDto } from './dto/create-ticket-sale.dto';
import { UpdateTicketSaleDto } from './dto/update-ticket-sale.dto';

@Injectable()
export class TicketSaleService {
  private sales = [];

  createSale(createTicketSaleDto: CreateTicketSaleDto): string {
    // Lógica para registrar la venta
    this.sales.push(createTicketSaleDto);
    return `Venta de ${createTicketSaleDto.quantity} boletos para evento ${createTicketSaleDto.eventId} registrada`;
  }

  getSales(eventId: string): number {
    // Lógica para contar las ventas del evento
    return this.sales.filter(sale => sale.eventId === eventId).reduce((acc, sale) => acc + sale.quantity, 0);
  }

  updateSale(saleId: string, updateTicketSaleDto: UpdateTicketSaleDto): string {
    // Lógica para actualizar el estado de la venta
    const sale = this.sales.find(s => s.saleId === saleId);
    if (sale) {
      sale.status = updateTicketSaleDto.status;
      return `Venta con ID ${saleId} actualizada a estado ${updateTicketSaleDto.status}`;
    }
    return `Venta con ID ${saleId} no encontrada`;
  }
}
