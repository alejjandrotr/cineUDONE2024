import '../../../styles/seleccion-entrada.css';
import '../../../styles/venta-boletos.css';
import img1 from '../../../assets/Poster.png';
export function DetallesPelicula() {
  return (
    <div className="detalles">
      <div className="cuadro-fondo p-8">
        <img src={img1} alt="Poster de la pelicula" />
        <h1>Spiderman No Way Home</h1>
        <p>
          Tras descubrirse la identidad secreta de Peter Parker como Spider-Man,
          la vida del joven se vuelve una locura. Peter le pide ayuda al Doctor
          Strange para recuperar su vida, pero algo sale mal y provoca una
          fractura en el multiverso.
        </p>

        <table>
          <tbody>
          <tr className="detalles-funcion">
            <td>Fecha</td>
            <td>15-12</td>
          </tr>
          <tr className="detalles-funcion">
            <td>Hora</td>
            <td>18:00</td>
          </tr>
          <tr className="detalles-funcion">
            <td>Sala</td>
            <td>A</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
