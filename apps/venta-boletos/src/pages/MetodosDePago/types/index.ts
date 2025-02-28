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
  nroTelefono: string;
  cedula: string;
}

export interface PagoTransferencia {
  id: number;
  nroCuenta: string;
  cedula: string;
}
