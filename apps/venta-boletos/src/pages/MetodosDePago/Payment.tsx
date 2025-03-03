import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import '../../styles/payment.css';
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

const Payment = () => {
  const [tipoPago, setTipoPago] = useState("");
  const [bancoSeleccionado, setBancoSeleccionado] = useState("");
  const [numeroTelefono, setNumeroTelefono] = useState("");
  const [numeroTransferencia, setNumeroTransferencia] = useState("");
  const [cedula, setCedula] = useState("");
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [correoPaypal, setCorreoPaypal] = useState("");
  const [searchParams] = useSearchParams();
  const total = searchParams.get('total');

  const handleTipoPagoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTipoPago = e.target.value;
    setTipoPago(selectedTipoPago);
    setBancoSeleccionado("");
    setNumeroTelefono("");
    setNumeroTransferencia("");
    setCedula("");
    setNombres("");
    setApellidos("");
    setCorreoPaypal("");
  };

  const handleBancoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedBanco = e.target.value;
    setBancoSeleccionado(selectedBanco);

    const bancos = tipoPago === "pagoMovil" ? datos.pagoMovil : datos.transferencia;
    const banco = bancos.find((b) => b.nombreBanco === selectedBanco);
    if (banco) {
      if (tipoPago === "pagoMovil") {
        setNumeroTelefono(banco.numeroTelefono || "");
        setCedula(banco.cedula || "");
      } else {
        setNumeroTransferencia(banco.numeroTransferencia || "");
        setCedula(banco.cedula || "");
        setNombres(banco.nombres || "");
        setApellidos(banco.apellidos || "");
        setNumeroTelefono(banco.numeroTelefono || "");
      }
    }
  };

  const handlePaypalChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCorreoPaypal(e.target.value);
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

        {tipoPago === "pagoMovil" && (
          <div>
            <label>Banco: </label>
            <select value={bancoSeleccionado} onChange={handleBancoChange}>
              <option value="">Seleccione un banco</option>
              {datos.pagoMovil.map((banco) => (
                <option key={banco.id} value={banco.nombreBanco}>
                  {banco.nombreBanco}
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

        {tipoPago === "transferencia" && (
          <div>
            <label>Banco: </label>
            <select value={bancoSeleccionado} onChange={handleBancoChange}>
              <option value="">Seleccione un banco</option>
              {datos.transferencia.map((banco) => (
                <option key={banco.id} value={banco.nombreBanco}>
                  {banco.nombreBanco}
                </option>
              ))}
            </select>
            {bancoSeleccionado && (
              <div>
                <label>Número de Transferencia: </label>
                <input type="text" value={numeroTransferencia} readOnly />
                <br />
                <label>Nombres: </label>
                <input type="text" value={nombres} readOnly />
                <br />
                <label>Apellidos: </label>
                <input type="text" value={apellidos} readOnly />
                <br />
                <label>Cédula: </label>
                <input type="text" value={cedula} readOnly />
                <br />
                <label>Número de Teléfono Afiliado: </label>
                <input type="text" value={numeroTelefono} readOnly />
              </div>
            )}
          </div>
        )}

        {tipoPago === "paypal" && (
          <div>
            <label>Correo electrónico de PayPal: </label>
            <input type="text" value={correoPaypal} onChange={handlePaypalChange} />
          </div>
        )}


      {tipoPago && bancoSeleccionado && tipoPago !== "paypal" ? (
          <button className="pagar-button" onClick={() => console.log("Pago procesado")}>
            Pagar
          </button>
        ) : tipoPago === "paypal" && correoPaypal ? (
          <button className="pagar-button" onClick={() => console.log("Pago con PayPal procesado")}>
            Pagar
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Payment;
