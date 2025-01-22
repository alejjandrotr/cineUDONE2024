import { TituloPelicula } from '../components/TituloPelicula';
import { DetallesPelicula } from '../components/DetallesPelicula';
import { SeleccionEntrada } from '../components/SeleccionEntradas';
import { Horario } from '../components/Horario';
/* import { Route, Routes, Link } from 'react-router-dom'; */

export function App() {
  return (
    <div className="fondo">
      <div className="banner-container">
        <div className="banner"></div>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 h-screen content">
        <DetallesPelicula />

        <div className="juntos">
          <TituloPelicula />
          <Horario />
          <SeleccionEntrada />
        </div>
      </div>
    </div>
  );
}

export default App;
