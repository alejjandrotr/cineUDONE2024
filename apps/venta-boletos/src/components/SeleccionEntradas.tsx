import { useState } from 'react';
import TicketRow from './TicketRow';
import { increment, decrement } from '../helpers/counterOperations';
import '../styles/seleccion-entrada.css';

export function SeleccionEntrada() {
  interface TicketCounts {
    general: number;
    children: number;
    seniors: number;
  }

  const [counts, setCounts] = useState<TicketCounts>({
    general: 0,
    children: 0,
    seniors: 0,
  });

  const handleIncrement = (type: keyof TicketCounts) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [type]: increment(prevCounts[type]),
    }));
  };

  const handleDecrement = (type: keyof TicketCounts) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [type]: decrement(prevCounts[type]),
    }));
  };

  return (
    <div className="cuadro-fondo">
      <table className="entradas">
        <thead>
          <tr>
            <th>Tipo de Boleto</th>
            <th>Cantidad</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          <TicketRow
            ticketType="Boleto General"
            price={16}
            count={counts.general}
            onIncrement={() => handleIncrement('general')}
            onDecrement={() => handleDecrement('general')}
          />
          <TicketRow
            ticketType="Boleto Niños"
            price={10}
            count={counts.children}
            onIncrement={() => handleIncrement('children')}
            onDecrement={() => handleDecrement('children')}
          />
          <TicketRow
            ticketType="Boleto Ancianos"
            price={12}
            count={counts.seniors}
            onIncrement={() => handleIncrement('seniors')}
            onDecrement={() => handleDecrement('seniors')}
          />
          <tr>
            <td colSpan={2}>Total</td>
            <td className="price">$16</td>
          </tr>
          <button className="boton-pagar">Pagar</button>
        </tbody>
      </table>
    </div>
  );
}
