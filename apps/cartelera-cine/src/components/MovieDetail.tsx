import React, { useState } from 'react';
import '../styles/MovieDetail.css';
import { MdClose, MdPlayCircleOutline } from 'react-icons/md';
import { Movie } from '../core/models/Movie';
import { Schedule } from '../constants/schedules';
import MoviePrice from './MoviePrice';
import MovieTrailer from './MovieTrailer';
import MovieSchedule from './MovieSchedule';

const MovieDetail: React.FC<{ movie: Movie; onClose: () => void }> = ({ movie, onClose }) => {
  const buyTicketUrl = 'http://localhost:4201/';

  const handleBuyTicket = () => {
    window.location.href = buyTicketUrl;
  };

  const [showTrailer, setShowTrailer] = useState(false);

  const handlePosterClick = () => {
    setShowTrailer(true);
  };

  const closeTrailer = () => {
    setShowTrailer(false);
  };

  const scheduleByDate = movie.schedule?.reduce<Record<string, Schedule[]>>((acc, curr: Schedule) => {
    const dateKey = curr.startTime.toDateString();

    if (!acc[dateKey]) acc[dateKey] = [];
    acc[dateKey].push({
      date: curr.startTime,
      room: curr.room,
      startTime: curr.startTime,
      endTime: curr.endTime,
    });

    return acc;
  }, {}) || {};

  Object.keys(scheduleByDate).forEach(dateKey => {
    scheduleByDate[dateKey].sort((a, b) => a.date.getTime() - b.date.getTime());
  });

  return (
    <>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="movie-detail-view">
        <button className="close-button" onClick={onClose} title="Close">
          <MdClose size={32} />
          <span className="sr-only">Close</span>
        </button>
        <div className="movie-content">
          <div className="movie-poster-large" onClick={handlePosterClick}>
            <img src={movie.poster} alt={movie.title} loading="lazy" />
            <MdPlayCircleOutline className="play-icon" />
          </div>
          <div className="movie-price-buy-container">
            <MoviePrice price={movie.price} />
            <button className="buy-button" onClick={handleBuyTicket}>
              Comprar entrada
            </button>
          </div>
        </div>
        <div className="movie-content2">
          <div className="movie-info">
            <h2 className="movie-title-large">{movie.title}</h2>
            <div className="movie-additional-details">
              <div className="movie-detail">{movie.type}</div>
              <div className="movie-detail">{movie.rating}</div>
              <div className="movie-detail">{movie.duration} min</div>
            </div>
            <p className="movie-synopsis">{movie.synopsis}</p>
          </div>

          <MovieSchedule scheduleByDate={scheduleByDate} />
        </div>
      </div>

      {showTrailer && <MovieTrailer trailerUrl={movie.trailerUrl} onClose={closeTrailer} />}
    </>
  );
};

export default MovieDetail;
