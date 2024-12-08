import { Module } from '@nestjs/common';
import { PrecioController } from './precio.controller';
import { PrecioService } from './precio.service';

@Module({
  controllers: [PrecioController],
  providers: [PrecioService]
})
export class PrecioModule {}
