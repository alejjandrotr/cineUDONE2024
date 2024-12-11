import React from 'react';
import '../styles/MovieList.css';
import { Movie } from '../core/models/Movie';

const MovieCard = ({ movie, onSelect, getGenreNames }: { movie: Movie; onSelect: (movie: Movie) => void; getGenreNames: (genreIds: number[]) => string }) => {
  return (
    <div className="movie-card" onClick={() => onSelect(movie)}>
      <img
        src={movie.poster || 'ruta/a/imagen_por_defecto.jpg'}
        alt={movie.title}
        className="movie-poster"
      />
      <div className="movie-overlay">
        <h2 className="movie-title">{movie.title}</h2>
        <div className="movie-details">
          <span className="movie-genre">{getGenreNames(movie.genre)}</span> {/* Muestra los nombres de los géneros */}
          <span className="movie-duration">{movie.duration} min</span>
        </div>
      </div>
    </div>
  );
};

const MovieList = ({ movies, onSelect, getGenreNames }: { movies: Movie[]; onSelect: (movie: Movie) => void; getGenreNames: (genreIds: number[]) => string }) => {
  return (
    <div className="movie-list-container">
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} onSelect={onSelect} getGenreNames={getGenreNames} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;