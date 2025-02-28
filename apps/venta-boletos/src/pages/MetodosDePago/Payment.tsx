import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import '../../styles/payment.css';
import useFetchPagos from './services/useFetchPagos';
import axios from 'axios';

const Payment = () => {
  const [tipoPago, setTipoPago] = useState('');
  const [bancoSeleccionado, setBancoSeleccionado] = useState('');
  const [numeroTelefono, setNumeroTelefono] = useState('');
  const [numeroTransferencia, setNumeroTransferencia] = useState('');
  const [cedula, setCedula] = useState('');
  const [correoPaypal, setCorreoPaypal] = useState('');
  const [searchParams] = useSearchParams();
  const total = searchParams.get('total');
  const [referencia, setReferencia] = useState('');

  const { datosPagoMovil, datosPagoTransferencia } = useFetchPagos();

  const handleTipoPagoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTipoPago = e.target.value;
    setTipoPago(selectedTipoPago);
    setBancoSeleccionado('');
    setNumeroTelefono('');
    setNumeroTransferencia('');
    setCedula('');
    setCorreoPaypal('');
  };

  const handleBancoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
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

  const handlePaypalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCorreoPaypal(e.target.value);
  };
  const handleReferenciaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReferencia(e.target.value);
  };
  const handlePago = async () => {
    try {
      const banco = tipoPago === 'pagoMovil'
      ? datosPagoMovil.find((d) => d.id === parseInt(bancoSeleccionado))
      : datosPagoTransferencia.find((d) => d.id === parseInt(bancoSeleccionado));

    const datosPago = {
      referencia,
      bancoCodigo: banco ? banco.id.toString().padStart(4, '0') : '', // Asegúrate de que sea un código de 4 dígitos
      metodo: tipoPago === 'pagoMovil' ? 'Pago Movil' : 'Transferencia',
      fecha: new Date(),
      monto: parseFloat(total || '0'), // Asegúrate de que sea un número
      estado: 'Pendiente', // Por defecto, el estado es Pendiente
    };

      const response = await axios.post(
        'http://localhost:3002/api/paymentinfo',
        datosPago
      );
      console.log('Pago procesado:', response.data);
    } catch (error) {
      console.error('Error al procesar el pago:', error);
    }
  };

  return (
    <div className="container">
      <h1>Datos de Transferencia</h1>
      <label className="total-label">Total a Pagar: {total}</label>

      <div className="payment-form">
        <label> Tipo de pago: </label>
        <select value={tipoPago} onChange={handleTipoPagoChange}>
          <option value="">Seleccione un tipo de pago</option>
          <option value="pagoMovil">Pago Movil</option>
          <option value="transferencia">Transferencia</option>
          <option value="paypal">PayPal</option>
        </select>

        {tipoPago === 'pagoMovil' && (
          <div>
            <label>Banco: </label>
            <select value={bancoSeleccionado} onChange={handleBancoChange}>
              <option value="">Seleccione un banco</option>
              {datosPagoMovil.map((banco) => (
                <option key={banco.id} value={banco.id.toString()}>
                  Banco {banco.id}
                </option>
              ))}
            </select>
            {bancoSeleccionado && (
              <div>
                <label>Número de Teléfono: </label>
                <input type="text" value={numeroTelefono} readOnly />
                <br />
                <label>Cédula: </label>
                <input type="text" value={cedula} readOnly />
              </div>
            )}
          </div>
        )}

        {tipoPago === 'transferencia' && (
          <div>
            <label>Banco: </label>
            <select value={bancoSeleccionado} onChange={handleBancoChange}>
              <option value="">Seleccione un banco</option>
              {datosPagoTransferencia.map((banco) => (
                <option key={banco.id} value={banco.id.toString()}>
                  Banco {banco.id}
                </option>
              ))}
            </select>
            {bancoSeleccionado && (
              <div>
                <label>Número de Cuenta: </label>
                <input type="text" value={numeroTransferencia} readOnly />
                <br />
                <label>Cédula: </label>
                <input type="text" value={cedula} readOnly />
              </div>
            )}
          </div>
        )}

        {tipoPago === 'paypal' && (
          <div>
            <label>Correo electrónico de PayPal: </label>
            <input
              type="text"
              value={correoPaypal}
              onChange={handlePaypalChange}
            />
          </div>
        )}
        <label>Referencia del pago: </label>
        <input
          type="text"
          value={referencia}
          onChange={handleReferenciaChange}
        />

        {tipoPago && bancoSeleccionado && tipoPago !== 'paypal' ? (
          <button className="pagar-button" onClick={handlePago}>
            Pagar
          </button>
        ) : tipoPago === 'paypal' && correoPaypal ? (
          <button
            className="pagar-button"
            onClick={() => console.log('Pago con PayPal procesado')}
          >
            Pagar
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Payment;
