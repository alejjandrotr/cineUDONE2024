import axios from 'axios';
import { PagoMovil, PagoTransferencia, DatosPago } from '../types/index';

export const handleTipoPagoChange = (
  setTipoPago: (tipoPago: string) => void,
  setBancoSeleccionado: (banco: string) => void,
  setNumeroTelefono: (telefono: string) => void,
  setNumeroTransferencia: (transferencia: string) => void,
  setCedula: (cedula: string) => void,
  setCorreoPaypal: (correo: string) => void
) => {
  return (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTipoPago = e.target.value;
    setTipoPago(selectedTipoPago);
    setBancoSeleccionado('');
    setNumeroTelefono('');
    setNumeroTransferencia('');
    setCedula('');
    setCorreoPaypal('');
  };
};

export const handleBancoChange = (
  tipoPago: string,
  datosPagoMovil: PagoMovil[],
  datosPagoTransferencia: PagoTransferencia[],
  setBancoSeleccionado: (banco: string) => void,
  setNumeroTelefono: (telefono: string) => void,
  setNumeroTransferencia: (transferencia: string) => void,
  setCedula: (cedula: string) => void
) => {
  return (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedBanco = e.target.value;
    setBancoSeleccionado(selectedBanco);

    if (tipoPago === 'pagoMovil') {
      const dato = datosPagoMovil.find((d) => d.id === parseInt(selectedBanco));
      if (dato) {
        setNumeroTelefono(dato.nroTelefono || '');
        setCedula(dato.cedula || '');
      }
    } else if (tipoPago === 'transferencia') {
      const dato = datosPagoTransferencia.find(
        (d) => d.id === parseInt(selectedBanco)
      );
      if (dato) {
        setNumeroTransferencia(dato.nroCuenta || '');
        setCedula(dato.cedula || '');
      }
    }
  };
};

export const handlePaypalChange = (
  setCorreoPaypal: (correo: string) => void
) => {
  return (e: React.ChangeEvent<HTMLInputElement>) => {
    setCorreoPaypal(e.target.value);
  };
};

export const handleReferenciaChange = (
  setReferencia: (referencia: string) => void
) => {
  return (e: React.ChangeEvent<HTMLInputElement>) => {
    setReferencia(e.target.value);
  };
};

export const handlePago = async (
    referencia: string,
    tipoPago: string,
    bancoSeleccionado: string,
    datosPagoMovil: PagoMovil[],
    datosPagoTransferencia: PagoTransferencia[],
    total: string | null
  ) => {
    try {
      if (!referencia || referencia.length < 4 || isNaN(parseInt(referencia))) {
        throw new Error(
          'La referencia debe ser un número de al menos 4 dígitos.'
        );
      }
  
      const banco =
        tipoPago === 'pagoMovil'
          ? datosPagoMovil.find((d) => d.id === parseInt(bancoSeleccionado))
          : datosPagoTransferencia.find(
              (d) => d.id === parseInt(bancoSeleccionado)
            );
  
      if (!banco) {
        throw new Error('No se encontró el banco seleccionado.');
      }
  
      if (!total || parseFloat(total) <= 0) {
        throw new Error('El monto debe ser un número positivo.');
      }
  
      const datosPago: DatosPago = {
        referencia,
        metodo: tipoPago === 'pagoMovil' ? 'Pago Movil' : 'Transferencia',
        fecha: new Date(), // Enviar fecha como objeto Date
        monto: parseFloat(total),
        estado: 'pendiente',
        bancoCodigo: banco.id.toString().padStart(4, '0'),
      };
  
      const response = await axios.post(
        'http://localhost:3002/api/paymentinfo',
        datosPago
      );
      console.log('Pago procesado:', response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Error al procesar el pago:', error.message);
        if (error.response) {
          console.log('Error del servidor:', error.response.data);
        }
      } else {
        console.error('Error inesperado:', error);
      }
    }
  };