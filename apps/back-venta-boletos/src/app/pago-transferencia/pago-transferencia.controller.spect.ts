<<<<<<< HEAD
import { Test, TestingModule } from '@nestjs/testing';
=======
/*import { Test, TestingModule } from '@nestjs/testing';
>>>>>>> e05e76b859b676e9a568297baf26dd44680b3a7f
import { PagoTransferenciaController } from './pago-transferencia.controller';
import { PagoTransferenciaService } from './pago-transferencia.service';

describe('PagoTransferenciaController', () => {
  let controller: PagoTransferenciaController;
  let service: PagoTransferenciaService;

  const mockService = {
    createPagoTransferencia: jest.fn(), // Mockear el método createPagoTransferencia
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PagoTransferenciaController],
      providers: [
        {
          provide: PagoTransferenciaService,
          useValue: mockService, // Usar el mock en lugar del servicio real
        },
      ],
    }).compile();

    controller = module.get<PagoTransferenciaController>(PagoTransferenciaController);
    service = module.get<PagoTransferenciaService>(PagoTransferenciaService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
<<<<<<< HEAD
});
=======
});*/
>>>>>>> e05e76b859b676e9a568297baf26dd44680b3a7f
