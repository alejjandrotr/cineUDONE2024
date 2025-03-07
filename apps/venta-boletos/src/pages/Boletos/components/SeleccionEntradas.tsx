import useTicketCounts from '../hooks/useTicketCounts';
import FilaEntrada from './FilaEntrada';
import '../../../styles/seleccion-entrada.css';
import useFetch from '../services/useFetch';
import { Link } from 'react-router-dom';
import { useHorario } from '../../../context/HorarioContext'; // Importa el hook del contexto

export function SeleccionEntrada() {
  const { counts, handleIncrement, handleDecrement } = useTicketCounts();
  const { data } = useFetch('http://localhost:3002/api/precio');
  const precio = data?.precio || 0;
  const { selectedDate, selectedHour } = useHorario(); // Obtén la fecha y hora del contexto

  const total = (precio * counts.general) + (precio * counts.children) + (precio * counts.seniors);
  const formattedTotal = parseFloat(total.toFixed(2));

  return (
    <div className="max-w-md cuadro-fondo p-2">
      <table className="entradas">
        <thead>
          <tr>
            <th>Tipo de Boleto</th>
            <th>Cantidad</th>
            <th>Precios</th>
          </tr>
        </thead>
        <tbody>
          <FilaEntrada
            entradTipo="Boleto General"
            precio={(precio * counts.general).toFixed(2)}
            contador={counts.general}
            onIncrement={() => handleIncrement('general')}
            onDecrement={() => handleDecrement('general')}
          />
          <FilaEntrada
            entradTipo="Boleto Niños"
            precio={(precio * counts.children).toFixed(2)}
            contador={counts.children}
            onIncrement={() => handleIncrement('children')}
            onDecrement={() => handleDecrement('children')}
          />
          <FilaEntrada
            entradTipo="Boleto Ancianos"
            precio={(precio * counts.seniors).toFixed(2)}
            contador={counts.seniors}
            onIncrement={() => handleIncrement('seniors')}
            onDecrement={() => handleDecrement('seniors')}
          />
          <tr>
            <td colSpan={2}>Total</td>
            <td className="price">${formattedTotal}</td>
          </tr>
        </tbody>
      </table>
      <Link
        to={`/payment?total=${formattedTotal}&general=${counts.general}&children=${counts.children}&seniors=${counts.seniors}&date=${selectedDate}&time=${selectedHour}`}
      >
        <button className="boton-pagar">Pagar</button>
      </Link>
    </div>
  );
}