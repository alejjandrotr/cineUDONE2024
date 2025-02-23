import useTicketCounts  from '../hooks/useTicketCounts'
import FilaEntrada from './FilaEntrada';
import '../../../styles/seleccion-entrada.css';

export function SeleccionEntrada() {
  const {counts, handleIncrement, handleDecrement} = useTicketCounts();
  /*const { data, loading, error } = useFetch('precio/cant');*/
  return (
    <div className="max-w-md cuadro-fondo ">
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
            precio={16}
            contador={counts.general}
            onIncrement={() => handleIncrement('general')}
            onDecrement={() => handleDecrement('general')}
          />
          <FilaEntrada
            entradTipo="Boleto Niños"
            precio={10}
            contador={counts.children}
            onIncrement={() => handleIncrement('children')}
            onDecrement={() => handleDecrement('children')}
          />
          <FilaEntrada
            entradTipo="Boleto Ancianos"
            precio={12}
            contador={counts.seniors}
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
