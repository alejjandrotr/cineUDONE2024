import React, {  useState } from 'react'
import './Payment.css'

interface Banco {
  id: number; 
  nombreBanco: string;
  numeroTransferencia: string;
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
      numeroTransferencia: '0412-1234567',
    },
    {
      id: 2,
      nombreBanco: 'Banesco',
      numeroTransferencia: '0414-7654321',
    },
  ],
  transferencia: [
    {
      id: 1,
      nombreBanco: 'Banco de Venezuela',
      numeroTransferencia: '0102-12345678901234',
    },
    {
      id: 2,
      nombreBanco: 'Banesco',
      numeroTransferencia: '0105-98765432109876',
    },
  ]
  
};

const Payment = () => {
 const [tipoPago, setTipoPago] = useState ("");
 const [bancoSeleccionado, setBancoSeleccionado] = useState ("");  
 const [numeroTransferencia, setNumeroTransferencia] = useState ("");  

const handleTipoPagoChange = (e) => {
  const selectedTipoPago = e.target.value;
  setTipoPago(selectedTipoPago);
  setBancoSeleccionado("");
  setNumeroTransferencia("");
}
const handleBancoChange = (e) => {
  const selectedBanco = e.target.value;
  setBancoSeleccionado(selectedBanco);

 const bancos=tipoPago === "pagoMovil" ? datos.pagoMovil : datos.transferencia;
const banco = bancos.find((b) => b.nombreBanco === selectedBanco); 
if (banco) {
  setNumeroTransferencia(banco.numeroTransferencia);
}
  
}

  return ( 
   <div>
    <h1>Datos de Transferencia</h1>
    <div>
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
              </option >
            ))}
          </select>
          </div>
      )}
      {bancoSeleccionado && (
        <div>
          <label>Numero de Transferencia: </label>
          <input type="text" value={numeroTransferencia} readOnly />
          </div>
      )}

    </div>
   </div> 
  )
}

export default Payment