// src/hooks/useMovies.ts
import { useState, useEffect } from "react";
import { Movie } from "../core/models/Movie";
import { fetchMovies } from "../api/apiClient";

const MAINTENANCE_TIME = 15;

const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const data = await fetchMovies();

        console.log("Películas recibidas:", data);

        if (!Array.isArray(data)) {
          throw new Error("Los datos de películas no son un array");
        }

        const updatedMovies = data.map((movie: any) => ({
          id: movie.id,
          title: movie.title,
          synopsis: movie.synopsis,
          genre: movie.genre,
          schedule: Array.isArray(movie.schedule)
            ? movie.schedule.map((item: any) => {
                const startTime = new Date(item.date);
                const movieDuration = movie.duration || 0; // Evitar undefined
                const endTime = new Date(
                  startTime.getTime() + movieDuration * 60 * 1000
                );

                const adjustedStartTime = new Date(
                  startTime.getTime() - MAINTENANCE_TIME * 60 * 1000
                );
                const adjustedEndTime = new Date(
                  endTime.getTime() + MAINTENANCE_TIME * 60 * 1000
                );

                return {
                  date: startTime,
                  room: item.room,
                  startTime: adjustedStartTime,
                  endTime: adjustedEndTime,
                };
              })
            : [], // Si schedule es undefined, lo convertimos en un array vacío
          type: movie.type,
          rating: movie.rating,
          duration: movie.duration || 0, // Asegurar un valor numérico
          poster: movie.poster || "",
          price: movie.price || 0, // Asegurar un valor numérico
          trailerUrl: movie.trailerUrl || "",
        }));

        setMovies(updatedMovies);
        setFilteredMovies(updatedMovies);
      } catch (error) {
        console.error("Error al cargar las películas:", error);
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
