import { Test, TestingModule } from '@nestjs/testing';
import { pago_movil_controller } from './pago-movil.controller';
import { pago_movil_service } from './pago-movil.service';
//import { createpagomovil } from './pago-movil.entity'; // Asegúrate de importar la entidad

describe('pago_movil_controller', () => {
  let controller: pago_movil_controller;
  let service: pago_movil_service;

  const mockService = {
    create_pago: jest.fn(), // Como estamos en un entorno de prueba, generalmente es mejor "mockear" el
                            // repositorio para que puedas probar
                            ///el comportamiento de tu servicio sin depender de una base de datos real.
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [pago_movil_controller],
      providers: [
        {
          provide: pago_movil_service,
          useValue: mockService, // Usar el mock en lugar del servicio real
        },
      ],
    }).compile();

    controller = module.get<pago_movil_controller>(pago_movil_controller);
    service = module.get<pago_movil_service>(pago_movil_service);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

/// el código que compartiste establece una prueba simple para comprobar que el PaymentinfoController
//esté correctamente definido y disponible.
