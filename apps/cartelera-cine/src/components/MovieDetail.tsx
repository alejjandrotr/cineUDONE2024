import React from 'react';
import '../styles/MovieDetail.css';
import { MdClose } from 'react-icons/md';
import { Movie } from '../core/models/Movie';
import MoviePrice from './MoviePrice';

const MovieDetail: React.FC<{ movie: Movie; onClose: () => void }> = ({ movie, onClose }) => {
  return (
    <>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="movie-detail-view">
        {/* Botón de cerrar */}
        <button className="close-button" onClick={onClose}>
          <MdClose size={32} />
        </button>
        <div className="movie-content">
          {/* Imagen de la película */}
          <img src={movie.poster} alt={movie.title} className="movie-poster-large" />
          <div className="movie-info">
            <h2 className="movie-title-large">{movie.title}</h2>
            <div className="movie-additional-details">
              <div className="movie-detail">{movie.type}</div>
              <div className="movie-detail">{movie.rating}</div>
              <div className="movie-detail">{movie.duration} mins</div>
            </div>
            {/* Horarios */}
            <div className="movie-schedule">
              <h3>Horarios:</h3>
              <ul>
                {movie.schedule.map((time, index) => (
                  <li key={index} className="schedule-item">
                    {time}
                  </li>
                ))}
              </ul>
            </div>
            <p className="movie-synopsis">{movie.synopsis}</p>
            {/* Contenedor con el precio y el botón de compra */}
            <div className="movie-price-buy-container">
              <MoviePrice price={movie.price} /> {/* Componente de precio */}
              <button className="buy-button">Comprar entrada</button> {/* Botón de compra */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
