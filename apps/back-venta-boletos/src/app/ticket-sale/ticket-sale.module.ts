import { Module } from '@nestjs/common';
import { TicketSaleService } from './ticket-sale.service';
import { TicketSaleController } from './ticket-sale.controller';

@Module({
  imports: [],
  controllers: [TicketSaleController],
  providers: [TicketSaleService],
})
export class TicketSaleModule {}
