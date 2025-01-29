import { Controller, Get, Post, Patch, Param, Body } from '@nestjs/common';
import { TicketSaleService } from './ticket-sale.service';
import { CreateTicketSaleDto } from './dto/create-ticket-sale.dto';
import { UpdateTicketSaleDto } from './dto/update-ticket-sale.dto';

@Controller('ticket-sale')
export class TicketSaleController {
  constructor(private readonly ticketSaleService: TicketSaleService) {}

  @Post()
  create(@Body() createTicketSaleDto: CreateTicketSaleDto): string {
    return this.ticketSaleService.createSale(createTicketSaleDto);
  }

  @Get(':eventId')
  getSales(@Param('eventId') eventId: string): number {
    return this.ticketSaleService.getSales(eventId);
  }

  @Patch(':saleId')
  update(@Param('saleId') saleId: string, @Body() updateTicketSaleDto: UpdateTicketSaleDto): string {
    return this.ticketSaleService.updateSale(saleId, updateTicketSaleDto);
  }
}
