import { Module } from '@nestjs/common';
import { PrecioService } from './precio.service';
import { PrecioController } from './precio.controller';

@Module({
    providers: [PrecioService],
    controllers: [PrecioController],
})
export class PrecioModule {}

