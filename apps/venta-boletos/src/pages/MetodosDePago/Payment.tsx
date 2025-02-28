import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import '../../styles/payment.css';
import {PagoMovil, PagoTransferencia} from './types/index'


const Payment = () => {
  const [tipoPago, setTipoPago] = useState("");
  const [bancoSeleccionado, setBancoSeleccionado] = useState("");
  const [numeroTelefono, setNumeroTelefono] = useState("");
  const [numeroTransferencia, setNumeroTransferencia] = useState("");
  const [cedula, setCedula] = useState("");
  const [correoPaypal, setCorreoPaypal] = useState("");
  const [searchParams] = useSearchParams();
  const total = searchParams.get('total');



  const [datosPagoMovil, setDatosPagoMovil] = useState<PagoMovil[]>([]);
  const [datosPagoTransferencia, setDatosPagoTransferencia] = useState<PagoTransferencia[]>([]);

  useEffect(() => {
    const fetchDatos = async () => {
      try {
        const [response1, response2] = await Promise.all([
          fetch('http://localhost:3002/api/pago-movil'),
          fetch('http://localhost:3002/api/pago-transferencia'),
        ]);

        const datos1 = await response1.json();
        const datos2 = await response2.json();

        setDatosPagoMovil(datos1);
        setDatosPagoTransferencia(datos2);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDatos();
  }, []);

  const handleTipoPagoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTipoPago = e.target.value;
    setTipoPago(selectedTipoPago);
    setBancoSeleccionado("");
    setNumeroTelefono("");
    setNumeroTransferencia("");
    setCedula("");
    setCorreoPaypal("");
  };

  const handleBancoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedBanco = e.target.value;
    setBancoSeleccionado(selectedBanco);

    if (tipoPago === "pagoMovil") {
      const dato = datosPagoMovil.find((d) => d.id === parseInt(selectedBanco));
      if (dato) {
        setNumeroTelefono(dato.nroTelefono || "");
        setCedula(dato.cedula || "");
      }
    } else if (tipoPago === "transferencia") {
      const dato = datosPagoTransferencia.find((d) => d.id === parseInt(selectedBanco));
      if (dato) {
        setNumeroTransferencia(dato.nroCuenta || "");
        setCedula(dato.cedula || "");
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

        {tipoPago === "transferencia" && (
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
