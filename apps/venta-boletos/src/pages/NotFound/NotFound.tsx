import '../../styles/NotFound.css';
import error from '../../assets/error_404.svg';

const NotFound = () => {
  return (
    <div className="notFound-container">
      <div className="notFound-svg-container">
        <img src={error} alt="Globo terráqueo" className="notFound-svg" />
      </div>
      <h1 className="notFound-title">¡Ups! Parece que te has perdido...</h1>
      <p className="notFound-message">
        No te preocupes, a veces sucede. Puedes intentar volver al
        inicio o explorar otras opciones.
      </p>
      <button className="notFound-button">
        <a href="/" className="notFound-link">
          Volver al inicio
        </a>
      </button>
    </div>
  );
};

export default NotFound;
