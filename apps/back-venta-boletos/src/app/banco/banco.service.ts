import { Injectable, NotFoundException } from '@nestjs/common';
import { Banco } from './banco.entity';
import { CreateBancoDto } from './dto/create-banco.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateBancoDto } from './dto/update-banco.dto';

@Injectable()
export class BancoService {
    constructor(@InjectRepository(Banco) private bancoRepository: Repository<Banco>){}
    
        createBanco(banco: CreateBancoDto){
            const newBanco = this.bancoRepository.create(banco);
            this.bancoRepository.save(newBanco);
            return newBanco;
        }
    
        getBanco(){
            return this.bancoRepository.find();
        }

        async deleteBanco(codigo: string){
            const existeBanco = await this.bancoRepository.findOne({ where: {codigo}});
            if (!existeBanco) {
                throw new NotFoundException(`Banco con codigo ${codigo} no encontrado`);
            }
            return this.bancoRepository.delete({codigo});
        }

        async updateBanco(codigo: string, banco: UpdateBancoDto){
            const existeBanco = await this.bancoRepository.findOne({ where: {codigo}});
            if (!existeBanco) {
                throw new NotFoundException(`Banco con codigo ${codigo} no encontrado`);
            }
            const updateBanco = Object.assign(existeBanco,banco)
            return this.bancoRepository.save(updateBanco)
        }
}
