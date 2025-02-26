import {useState} from 'react'
import useTicketCounts  from '../hooks/useTicketCounts'
import FilaEntrada from './FilaEntrada';
import '../../../styles/seleccion-entrada.css';
import useFetch  from '../services/useFetch';

export function SeleccionEntrada() {
  const {counts, handleIncrement, handleDecrement} = useTicketCounts();
 /*
  const { data, loading, error } = useFetch('http://localhost:3002/api/paymentinfo');
  console.log(data);
 */

  const total = (4 * counts.general) + (3.2 * counts.children) + (3.5 * counts.seniors);
  const formattedTotal = total.toFixed(2);
  const handlePayment = async () => {
    const totalAmount = formattedTotal; // Calcula el total

    try {
      const response = await fetch('http://localhost:4201/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ total: totalAmount }),
      });

      if (!response.ok) {
        throw new Error('Error al realizar el pago');
      }

      const result = await response.json();
      console.log('Pago realizado:', result);
      // Aquí puedes redirigir al usuario o mostrar un mensaje de éxito
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <div className="max-w-md cuadro-fondo p-2">
      <table className="entradas">
        <thead>
          <tr>
            <th>Tipo de Boleto</th>
            <th>Cantidad</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          <FilaEntrada
            entradTipo="Boleto General"
            precio={(4*counts.children).toFixed(2)}
            contador={counts.general}
            onIncrement={() => handleIncrement('general')}
            onDecrement={() => handleDecrement('general')}
          />
          <FilaEntrada
            entradTipo="Boleto Niños"
            precio={(3.2*counts.children).toFixed(2)}
            contador={counts.children}
            onIncrement={() => handleIncrement('children')}
            onDecrement={() => handleDecrement('children')}
          />
          <FilaEntrada
            entradTipo="Boleto Ancianos"
            precio={(3.5*counts.seniors).toFixed(2)}
            contador={counts.seniors}
            onIncrement={() => handleIncrement('seniors')}
            onDecrement={() => handleDecrement('seniors')}
          />
          <tr>
            <td colSpan={2}>Total</td>
            <td className="price">${formattedTotal}</td>
          </tr>
          <button className="boton-pagar" onClick={handlePayment}>Pagar</button>
        </tbody>
      </table>
    </div>
  );
}
