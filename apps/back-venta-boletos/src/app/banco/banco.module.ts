import { Module } from '@nestjs/common';
import { BancoController } from './banco.controller';
import { BancoService } from './banco.service';
import { Banco } from './banco.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Banco])],
  controllers: [BancoController],
  providers: [BancoService]
})
export class BancoModule {}
