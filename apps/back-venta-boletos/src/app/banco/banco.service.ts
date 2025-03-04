import { Injectable } from '@nestjs/common';
import { Banco } from './banco.entity';
import { CreateBancoDto } from './dto/create-banco.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

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
}
