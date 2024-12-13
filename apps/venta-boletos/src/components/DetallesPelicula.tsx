import '../styles/venta-boletos.css';
import img1 from '../assets/Poster.png';
export function DetallesPelicula() {
  const funciones = [
    { fecha: '12-15', hora: '18:00', sala: 'Sala A' },
    { fecha: '12-16', hora: '20:00', sala: 'Sala B' },
    { fecha: '12-17', hora: '19:30', sala: 'Sala C' },
  ];
  return (
    <div className="col-span-1 row-span-3 bg-blue-500 p-4 my-8 mx-auto detalles">
      <img src={img1} alt="Poster de la pelicula" />
      <h1>Spiderman No Way Home</h1>
      <div style={{ margin: '0 auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <tr>
            <td>Fecha</td>
            <td>15-12</td>
          </tr>
          <tr>
            <td>Hora</td>
            <td>18:00</td>
          </tr>
          <tr>
            <td>Sala</td>
            <td>A</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default DetallesPelicula;
