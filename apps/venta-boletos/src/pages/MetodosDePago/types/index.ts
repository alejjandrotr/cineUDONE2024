export interface Banco {
    id: number;
    nombreBanco: string;
    numeroTransferencia?: string; // Solo para transferencia
    numeroTelefono?: string; // Solo para pago móvil
    cedula?: string; // Para transferencia
    nombres?: string; // Solo para transferencia
    apellidos?: string; // Solo para transferencia
  }
  
 export interface DatosTransferencia {
    pagoMovil: Banco[];
    transferencia: Banco[];
  }