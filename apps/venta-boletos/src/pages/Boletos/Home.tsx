import { TituloPelicula } from './components/TituloPelicula';
import { DetallesPelicula } from './components/DetallesPelicula';
import { SeleccionEntrada } from './components/SeleccionEntradas';
import Horario from './components/Horario';
import { HorarioProvider } from '../../context/HorarioContext'; // Importa el proveedor
import '../../styles.css';

const Home = () => {
  return (
    <div className="fondo">
      <div className="banner-container">
        <div className="banner"></div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-end xl:gap-56 content">
        <div className="lg:order-1">
          <TituloPelicula />
          <DetallesPelicula />
        </div>
        <div className="gap-4 lg:order-2">
          <HorarioProvider> {/* Envuelve los componentes con el proveedor */}
            <Horario />
            <SeleccionEntrada />
          </HorarioProvider>
        </div>
      </div>
    </div>
  );
};

export default Home;