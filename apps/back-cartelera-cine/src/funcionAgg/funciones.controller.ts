import { Controller, Post, Get, Body } from '@nestjs/common';
import { FuncionesService } from './service/funciones.service';
import { CreateFuncionDto } from './dto/create-funcion.dto';

@Controller('funciones') // Maneja rutas bajo /api/funciones
export class FuncionesController {
  constructor(private readonly funcionesService: FuncionesService) {}

  @Post()
  addFuncion(@Body() funcionData: CreateFuncionDto) {
    //console.log({funcionData})
    return this.funcionesService.addFuncion(funcionData);
  }

  @Get()
  getFunciones() {
    return this.funcionesService.getAllFunciones();
  }

}
