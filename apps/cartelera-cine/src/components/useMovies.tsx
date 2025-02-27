// src/hooks/useMovies.ts
import { useState, useEffect } from 'react';
import { Movie } from '../core/models/Movie';
import { fetchMovies } from '../api/apiClient'; // Importa fetchMovies

const MAINTENANCE_TIME = 15;

const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        // Usa fetchMovies para obtener los datos de la API
        const data = await fetchMovies();

        // Procesa los datos como lo hacías antes
        const updatedMovies = data.map((movie: any) => ({
          id: movie.id,
          title: movie.title,
          synopsis: movie.synopsis,
          genre: movie.genre,
          schedule: Array.isArray(movie.schedule) ? movie.schedule.map((item: any) =>{
            const startTime = new Date(item.date);
            const endTime = new Date(startTime.getTime() + movie.duration * 60 * 1000);
            const adjustedStartTime = new Date(startTime.getTime() - MAINTENANCE_TIME * 60 * 1000);
            const adjustedEndTime = new Date(endTime.getTime() + MAINTENANCE_TIME * 60 * 1000);

            return {
              date: startTime,
              room: item.room,
              startTime: adjustedStartTime,
              endTime: adjustedEndTime,
            };
          }) : [],
          type: movie.type,
          rating: movie.rating,
          duration: movie.duration,
          poster: movie.poster || '',
          price: movie.price,
          trailerUrl: movie.trailerUrl,
        }));

        setMovies(updatedMovies);
        setFilteredMovies(updatedMovies);
      } catch (error) {
        console.error('Error al cargar las películas:', error);
      }
    };

    loadMovies();
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
