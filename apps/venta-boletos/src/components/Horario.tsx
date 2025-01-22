import '../styles/horario.css';
export function Horario() {
  return (
    <div className="col-span-1 row-span-1 fondo-horario">
      <div className="grid grid-cols-1 grid-rows-3 h-screen ">
        <div className="row-span-2 horario-contenedor">
          <div className="horario-dia">
            <span>Feb</span>
            <h4 className="fondo-dia">06</h4>
          </div>
          <div className="horario-dia">
            <span>Feb</span>
            <h4 className="fondo-dia">06</h4>
          </div>
          <div className="horario-dia">
            <span>Feb</span>
            <h4 className="fondo-dia">06</h4>
          </div>
          <div className="horario-dia--active">
            <span>Feb</span>
            <h4 className="fondo-dia">06</h4>
          </div>
          <div className="horario-dia">
            <span>Feb</span>
            <h4 className="fondo-dia">06</h4>
          </div>
          <div className="horario-dia">
            <span>Feb</span>
            <h4 className="fondo-dia">06</h4>
          </div>
          <div className="horario-dia">
            <span>Feb</span>
            <h4 className="fondo-dia">06</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
