import useTicketCounts  from '../hooks/useTicketCounts'
import FilaEntrada from './FilaEntrada';
import '../../../styles/seleccion-entrada.css';
import useFetch  from '../services/useFetch';
import { Link } from 'react-router-dom';

export function SeleccionEntrada() {
  const {counts, handleIncrement, handleDecrement} = useTicketCounts();

  const { data } = useFetch('http://localhost:3002/api/precio');
  console.log(data);
  const precio = data;

  const total = (precio * counts.general) + (precio * counts.children) + (precio * counts.seniors);
  const formattedTotal = parseFloat(total.toFixed(2));
  
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
            precio={(precio*counts.general).toFixed(2)}
            contador={counts.general}
            onIncrement={() => handleIncrement('general')}
            onDecrement={() => handleDecrement('general')}
          />
          <FilaEntrada
            entradTipo="Boleto Niños"
            precio={(precio*counts.children).toFixed(2)}
            contador={counts.children}
            onIncrement={() => handleIncrement('children')}
            onDecrement={() => handleDecrement('children')}
          />
          <FilaEntrada
            entradTipo="Boleto Ancianos"
            precio={(precio*counts.seniors).toFixed(2)}
            contador={counts.seniors}
            onIncrement={() => handleIncrement('seniors')}
            onDecrement={() => handleDecrement('seniors')}
          />
          <tr>
            <td colSpan={2}>Total</td>
            <td className="price">${formattedTotal}</td>
          </tr>
          <Link to={`/payment?total=${formattedTotal}`}>
      <button className="boton-pagar">Pagar</button>
    </Link>
        </tbody>
      </table>
    </div>
  );
}
