import React from 'react';
import '../styles/MovieDetail.css';
import { MdClose } from 'react-icons/md';
import { Movie } from '../core/models/Movie';

const MovieDetail: React.FC<{ movie: Movie; onClose: () => void }> = ({ movie, onClose }) => {
  return (
    <>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="movie-detail-view">
        {/* Usamos el ícono MdClose como botón de cerrar */}
        <button className="close-button" onClick={onClose}>
          <MdClose size={32} /> {/* Tamaño de la X */}
        </button>
        <div className="movie-content">
          {/* Coloca la imagen a la izquierda y el contenido a la derecha */}
          <img src={movie.poster} alt={movie.title} className="movie-poster-large" />
          <div className="movie-info">
            <h2 className="movie-title-large">{movie.title}</h2>
            <div className="movie-additional-details">
              <div className="movie-detail">{movie.schedule}</div>
              <div className="movie-detail">{movie.type}</div>
              <div className="movie-detail">{movie.rating}</div>
              <div className="movie-detail">{movie.duration} mins</div>
            </div>
            {/* Sinopsis debajo de la información adicional */}
            <p className="movie-synopsis">{movie.synopsis}</p>
            <button className="buy-button">Comprar entrada</button> {/* Botón de comprar entrada */}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
