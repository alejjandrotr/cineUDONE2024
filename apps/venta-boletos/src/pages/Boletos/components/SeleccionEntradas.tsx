import useTicketCounts  from '../hooks/useTicketCounts'
import TicketRow from './TicketRow';
import '../../../styles/seleccion-entrada.css';

export function SeleccionEntrada() {
  const {counts, handleIncrement, handleDecrement} = useTicketCounts();

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
