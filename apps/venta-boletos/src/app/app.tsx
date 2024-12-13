import TituloPelicula from '../components/TituloPelicula';
import DetallesPelicula from '../components/DetallesPelicula';
import { Route, Routes, Link } from 'react-router-dom';

export function App() {
  return (
    <div className="fondo">
      <div className='banner-container'>
        <div className="banner"></div>
      </div>
      <div className="grid grid-cols-2 grid-rows-3 h-screen content">
        <DetallesPelicula />
        <TituloPelicula />
        <div className="col-span-1 row-span-1 bg-red-500 p-4 mx-16 my-4">
          Elemento Derecho Inferior
        </div>
        <div className="col-span-1 row-span-1 bg-red-500 p-4 mx-16 my-4">
          Elemento Derecho Inferior
        </div>
      </div>
    </div>
  );
}

export default App;
