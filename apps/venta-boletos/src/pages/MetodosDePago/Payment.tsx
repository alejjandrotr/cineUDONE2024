import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import '../../styles/payment.css';
import useFetchPagos from './services/useFetchPagos';
import {
  handleTipoPagoChange,
  handleBancoChange,
  handlePaypalChange,
  handleReferenciaChange,
  handlePago,
} from './handlers/handlers';

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

  const handleTipoPago = handleTipoPagoChange(
    setTipoPago,
    setBancoSeleccionado,
    setNumeroTelefono,
    setNumeroTransferencia,
    setCedula,
    setCorreoPaypal
  );

  const handleBanco = handleBancoChange(
    tipoPago,
    datosPagoMovil,
    datosPagoTransferencia,
    setBancoSeleccionado,
    setNumeroTelefono,
    setNumeroTransferencia,
    setCedula
  );

  const handlePaypal = handlePaypalChange(setCorreoPaypal);
  const handleReferencia = handleReferenciaChange(setReferencia);

  return (
    <div className="container">
      <h1>Datos de Transferencia</h1>
      <label className="total-label">Total a Pagar: {total}</label>

      <div className="payment-form">
        <label> Tipo de pago: </label>
        <select value={tipoPago} onChange={handleTipoPago}>
          <option value="">Seleccione un tipo de pago</option>
          <option value="pagoMovil">Pago Movil</option>
          <option value="transferencia">Transferencia</option>
          <option value="paypal">PayPal</option>
        </select>

        {tipoPago === 'pagoMovil' && (
          <div>
            <label>Banco: </label>
            <select value={bancoSeleccionado} onChange={handleBanco}>
              <option value="">Seleccione un banco</option>
              {datosPagoMovil.map((banco) => (
                <option key={banco.id} value={banco.id.toString()}>
                  Banco {banco.codigoBanco}
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
            <select value={bancoSeleccionado} onChange={handleBanco}>
              <option value="">Seleccione un banco</option>
              {datosPagoTransferencia.map((banco) => (
                <option key={banco.id} value={banco.id.toString()}>
                  Banco {banco.codigoBanco}
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
            <input type="text" value={correoPaypal} onChange={handlePaypal} />
          </div>
        )}
        <label>Referencia del pago: </label>
        <input type="text" value={referencia} onChange={handleReferencia} />

        {tipoPago && bancoSeleccionado && tipoPago !== 'paypal' ? (
          <button
            className="pagar-button"
            onClick={() =>
              handlePago(
                referencia,
                tipoPago,
                bancoSeleccionado,
                datosPagoMovil,
                datosPagoTransferencia,
                total
              )
            }
          >
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
