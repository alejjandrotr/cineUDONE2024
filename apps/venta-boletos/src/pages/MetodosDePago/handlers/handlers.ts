import axios from 'axios';
import { PagoMovil, PagoTransferencia, DatosPago } from '../types/index';

export const handleTipoPagoChange = (
  setTipoPago: (tipoPago: string) => void,
  setBancoSeleccionado: (banco: string) => void,
  setNumeroTelefono: (telefono: string) => void,
  setNumeroTransferencia: (transferencia: string) => void,
  setCedula: (cedula: string) => void,
  setCorreoPaypal: (correo: string) => void,
  setPagoEstado: (
    estado: 'en_revision' | 'exitoso' | 'rechazado' | null
  ) => void,
  setReferencia: (referencia: string) => void
) => {
  return (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTipoPago = e.target.value;
    setTipoPago(selectedTipoPago);
    setBancoSeleccionado('');
    setNumeroTelefono('');
    setNumeroTransferencia('');
    setCedula('');
    setPagoEstado(null);
    setReferencia('');
  };
};

export const handleBancoChange = (
  tipoPago: string,
  datosPagoMovil: PagoMovil[],
  datosPagoTransferencia: PagoTransferencia[],
  setBancoSeleccionado: (banco: string) => void,
  setNumeroTelefono: (telefono: string) => void,
  setNumeroTransferencia: (transferencia: string) => void,
  setCedula: (cedula: string) => void,
  setPagoEstado: (
    estado: 'en_revision' | 'exitoso' | 'rechazado' | null
  ) => void,
  setReferencia: (referencia: string) => void
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
    setPagoEstado(null);
    setReferencia('');
  };
};

export const handleReferenciaChange = (
  setReferencia: (referencia: string) => void,
  setErrorReferencia: (error: string) => void
) => {
  return (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (/^\d{0,4}$/.test(value)) {
      setReferencia(value);
      setErrorReferencia(''); // Limpiar el mensaje de error
    } else {
      setErrorReferencia('La referencia debe ser un número de 4 dígitos.'); // Mostrar mensaje de error
    }
  };
};

export const handlePago = async (
  referencia: string,
  tipoPago: string,
  bancoSeleccionado: string,
  datosPagoMovil: PagoMovil[],
  datosPagoTransferencia: PagoTransferencia[],
  total: string | null,
  setPagoEstado: (
    estado: 'en_revision' | 'exitoso' | 'rechazado' | null
  ) => void
) => {
  try {
    setPagoEstado('en_revision'); // Cambiar el estado a "en revisión"

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

    const bancoCodigo = banco.codigoBanco.codigo;
    const datosPago: DatosPago = {
      setPagoEstado,
      referencia,
      metodo: tipoPago === 'pagoMovil' ? 'Pago Movil' : 'Transferencia',
      fecha: new Date(), // Enviar fecha como objeto Date
      monto: parseFloat(total),
      id: banco.id,
      estado: 'pendiente',
      codigoBanco: bancoCodigo,
    };

    const response = await axios.post(
      'http://localhost:3002/api/paymentinfo',
      datosPago
    );
    console.log('Pago procesado:', response.data);

    setPagoEstado('exitoso'); // Cambiar el estado a "exitoso"
  } catch (error) {
    console.error('Error al procesar el pago:', error);
    setPagoEstado('rechazado'); // Cambiar el estado a "rechazado"
  }
};
