import React from 'react';
import '../styles/MovieTrailer.css';

const MovieTrailer: React.FC<{ trailerUrl: string; onClose: () => void }> = ({ trailerUrl, onClose }) => {
  return (
    <div className="trailer-overlay" onClick={onClose}>
      <div className="trailer-content" onClick={(e) => e.stopPropagation()}>
        <button className="trailer-close-button" onClick={onClose}>
          &times;
        </button>
        <iframe
          width="100%"
          height="400"
          src={`https://www.youtube.com/embed/${trailerUrl}`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Trailer"
        ></iframe>
      </div>
    </div>
  );
};

export default MovieTrailer;
