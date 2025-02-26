import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import '../../styles/payment.css';

interface Banco {
  id: number;
  nombreBanco: string;
  numeroTransferencia?: string; // Solo para transferencia
  numeroTelefono?: string; // Solo para pago móvil
  cedula?: string; // Para transferencia
  nombres?: string; // Solo para transferencia
  apellidos?: string; // Solo para transferencia
}

interface DatosTransferencia {
  pagoMovil: Banco[];
  transferencia: Banco[];
}

const datos: DatosTransferencia = {
  pagoMovil: [
    {
      id: 1,
      nombreBanco: 'Banco de Venezuela',
      numeroTelefono: '0412-1234567',
      cedula: '29515775', // Ejemplo de cédula
    },
    {
      id: 2,
      nombreBanco: 'Banesco',
      numeroTelefono: '0414-7654321',
      cedula: '29515776', // Ejemplo de cédula
    },
  ],
  transferencia: [
    {
      id: 1,
      nombreBanco: 'Banco de Venezuela',
      numeroTransferencia: '0102-12345678901234',
      nombres: 'Brian',
      apellidos: 'Gonzalez',
      cedula: '29515775', // Ejemplo de cédula
      numeroTelefono: '0412-9876543', // Ejemplo de número de teléfono
    },
    {
      id: 2,
      nombreBanco: 'Banesco',
      numeroTransferencia: '0105-98765432109876',
      nombres: 'Juan',
      apellidos: 'Pérez',
      cedula: '29515776', // Ejemplo de cédula
      numeroTelefono: '0414-1234567', // Ejemplo de número de teléfono
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
  const [searchParams] = useSearchParams();
  const total = searchParams.get('total');

  const handleTipoPagoChange = (e) => {
    const selectedTipoPago = e.target.value;
    setTipoPago(selectedTipoPago);
    setBancoSeleccionado("");
    setNumeroTelefono("");
    setNumeroTransferencia("");
    setCedula("");
    setNombres("");
    setApellidos("");
  };

  const handleBancoChange = (e) => {
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
        </select>

        {tipoPago && (
          <div>
            <label>Banco: </label>
            <select value={bancoSeleccionado} onChange={handleBancoChange}>
              <option value="">Seleccione un banco</option>
              {(tipoPago === "pagoMovil"
                ? datos.pagoMovil
                : datos.transferencia
              ).map((banco) => (
                <option key={banco.id} value={banco.nombreBanco}>
                  {banco.nombreBanco}
                </option>
              ))}
            </select>
          </div>
        )}
        {bancoSeleccionado && (
          <div>
            {tipoPago === "pagoMovil" ? (
              <div>
                <label>Número de Teléfono: </label>
                <input type="text" value={numeroTelefono} readOnly />
                <br />
                <label>Cédula: </label>
                <input type="text" value={cedula} readOnly />
              </div>
            ) : (
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
      </div>
    </div>
  );
};

export default Payment;
