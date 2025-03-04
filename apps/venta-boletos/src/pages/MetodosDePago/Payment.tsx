import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import '../../styles/payment.css';
<<<<<<< HEAD
import { Banco, DatosTransferencia } from './types/index'

const datos: DatosTransferencia = {
  pagoMovil: [
    {
      id: 1,
      nombreBanco: 'Banco de Venezuela',
      numeroTelefono: '0412-1234567',
      cedula: '29515775',
    },
    {
      id: 2,
      nombreBanco: 'Banesco',
      numeroTelefono: '0414-7654321',
      cedula: '29515776',
    },
  ],
  transferencia: [
    {
      id: 1,
      nombreBanco: 'Banco de Venezuela',
      numeroTransferencia: '0102-12345678901234',
      nombres: 'Brian',
      apellidos: 'Gonzalez',
      cedula: '29515775',
      numeroTelefono: '0412-9876543',
    },
    {
      id: 2,
      nombreBanco: 'Banesco',
      numeroTransferencia: '0105-98765432109876',
      nombres: 'Juan',
      apellidos: 'Pérez',
      cedula: '29515776',
      numeroTelefono: '0414-1234567',
    },
  ],
};
=======
import useFetchPagos from './services/useFetchPagos';
import {
  handleTipoPagoChange,
  handleBancoChange,
  handlePaypalChange,
  handleReferenciaChange,
  handlePago,
} from './handlers/handlers';
>>>>>>> 06fd643a685ce9b0efef958377cf71cf54b9516a

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

<<<<<<< HEAD

      {tipoPago && bancoSeleccionado && tipoPago !== "paypal" ? (
          <button className="pagar-button" onClick={() => console.log("Pago procesado")}>
=======
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
>>>>>>> 06fd643a685ce9b0efef958377cf71cf54b9516a
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
