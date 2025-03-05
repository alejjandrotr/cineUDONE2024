export interface PagoMovil {
  id: number;
  cedula: string;
  nroTelefono?: string; // Para pago móvil
  nroCuenta?: string; // Para transferencia
  codigoBanco: {
    codigo: string;
    nombre: string;
    logo: string;
  };
}

export interface PagoTransferencia {
  id: number;
  cedula: string;
  nroCuenta?: string;
  codigoBanco: {
    codigo: string;
    nombre: string;
    logo: string;
  };
}

export interface DatosPago {
  id: number;
  referencia: string;
  codigoBanco: string;
  metodo: string;
  fecha: Date;
  monto: number;
  estado: string;
  setPagoEstado: (estado: 'en_revision' | 'exitoso' | 'rechazado' | null) => void;
}