import '../../../styles/Horario.css';
export function Horario() {
  return (
    <div className="col-span-1 row-span-1 fondo-horario">
      <div className="grid grid-cols-1 grid-rows-3">
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
        <div className="row-span-1 hours">
          <span className='hour'>16:00</span>
          <span className='hour'>16:00</span>
          <span className='hour'>16:00</span>
          <span className='hour--active'>16:00</span>
          <span className='hour'>16:00</span>
          <span className='hour'>16:00</span>
          <span className='hour'>16:00</span>
        </div>
      </div>
    </div>
  );
}
