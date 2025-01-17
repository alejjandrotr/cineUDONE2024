import { useState, useEffect } from 'react';
import moviesData from '../movies.json';
import { Movie } from '../core/models/Movie';

const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const updatedMovies = moviesData.movies.map(movie => ({
      id: movie.id,
      title: movie.title,
      synopsis: movie.synopsis,
      genre: movie.genre,
      schedule: movie.schedule.map(item => ({
        date: new Date(item.date),
        room: item.room,
        startTime: new Date(item.date),
        endTime: new Date(new Date(item.date).getTime() + movie.duration * 60 * 1000), // Calcula hora de fin
      })),
      type: movie.type,
      rating: movie.rating,
      duration: movie.duration,
      poster: movie.poster || '',
      price: movie.price,
      trailerUrl: movie.trailerUrl,
    }));
    
    setMovies(updatedMovies);
    setFilteredMovies(updatedMovies);
  }, []);

  const handleSearch = (query: string) => {
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  return { movies, filteredMovies, handleSearch };
};

export default useMovies;
