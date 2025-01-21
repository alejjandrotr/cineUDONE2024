<<<<<<< HEAD
import { Test, TestingModule } from '@nestjs/testing';
=======
/*import { Test, TestingModule } from '@nestjs/testing';
>>>>>>> e05e76b859b676e9a568297baf26dd44680b3a7f
import { PagoTransferenciaService } from './pago-transferencia.service';
import { getRepositoryToken } from '@nestjs/typeorm'; // Importar para obtener el token del repositorio
import { PagoTransferencia } from './pago-transferencia.entity'; // Asegúrate de que la entidad esté importada
import { Repository } from 'typeorm'; // Importar Repository

describe('PagoTransferenciaService', () => {
  let service: PagoTransferenciaService;
  let mockRepository: Partial<Repository<PagoTransferencia>>;

  beforeEach(async () => {
    // Crear un mock del repositorio
    mockRepository = {
      create: jest.fn(), // Mockear el método create
      save: jest.fn(),   // Mockear el método save
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PagoTransferenciaService,
        {
          provide: getRepositoryToken(PagoTransferencia), // Usar getRepositoryToken para inyectar el repositorio
          useValue: mockRepository, // Proveer el mock del repositorio
        },
      ],
    }).compile();

    service = module.get<PagoTransferenciaService>(PagoTransferenciaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined(); // Verificar que el servicio esté definido
  });
<<<<<<< HEAD
});
=======
});*/
>>>>>>> e05e76b859b676e9a568297baf26dd44680b3a7f
