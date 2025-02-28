export interface Banco {
  id: number;
  nombreBanco: string;
  numeroTransferencia?: string;
  numeroTelefono?: string; 
  cedula?: string; 
  nombres?: string; 
  apellidos?: string; 
}

export interface DatosTransferencia {
  pagoMovil: Banco[];
  transferencia: Banco[];
}

export interface PagoMovil {
  id: number;
  codigoBanco: string;
  nroTelefono: string;
  cedula: string;
}

export interface PagoTransferencia {
  id: number;
  codigoBanco: string;
  nroCuenta: string;
  cedula: string;
}

export interface DatosPago {
  referencia: string;
  bancoCodigo: string;
  metodo: string;
  fecha: Date;
  monto: number;
  estado: string;
}