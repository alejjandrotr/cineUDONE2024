import { Test, TestingModule } from '@nestjs/testing';
import { pago_movil_service } from './pago-movil.service';
import { getRepositoryToken } from '@nestjs/typeorm'; // Importar para obtener el token del repositorio
import { createpagomovil } from './pago-movil.entity'; // Asegúrate de que la entidad esté importada
import { Repository } from 'typeorm';                  //importar Repository

describe('pago_movil_service', () => {
  let service: pago_movil_service;
  let mockRepository: Partial<Repository<createpagomovil>>;

  beforeEach(async () => {
    // Crear un mock del repositorio
    mockRepository = {
      create: jest.fn(), // Mockear el método create
      save: jest.fn(),   // Mockear el método save
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        pago_movil_service,
        {
          provide: getRepositoryToken(createpagomovil), // Usar getRepositoryToken para inyectar el repositorio
          useValue: mockRepository, // Proveer el mock del repositorio
        },
      ],
    }).compile();

    service = module.get<pago_movil_service>(pago_movil_service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined(); // Verificar que el servicio esté definido
  });
});


