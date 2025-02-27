import React from 'react';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { genres } from '../../../cartelera-cine/src/constants/genres';

const fetchMovieDetails = async (id: string) => {
  const { data } = await axios.get(`http://localhost:3001/api/movies/${id}`);
  return data;
};

const MovieDetails = () => {
  const { id } = useParams();
  const { isLoading, isError, data, isSuccess } = useQuery({
    queryKey: ['movie', id],
    queryFn: () => fetchMovieDetails(id || ''),
  });

  React.useEffect(() => {
    if (isLoading) {
      toast.loading('Cargando información de la película...', { id: 'loadingMovie' });
    }
    if (isError) {
      toast.error('Error al obtener los datos de la película.', { id: 'loadingMovie' });
    }
    if (isSuccess) {
      toast.success('Película cargada correctamente.', { id: 'loadingMovie' });
    }
  }, [isLoading, isError, isSuccess]);

  // 🛠️ Depuración: Ver qué formato tiene data.genre
  console.log('Género recibido desde la API:', data?.genre);

  // ✅ Función corregida para obtener el nombre del género desde el ID
  const getGenreName = (genreId: number) => {
    const foundGenre = genres.find((g) => g.id === genreId);
    return foundGenre ? foundGenre.name : 'Desconocido';
  };

  return (
    <div className="w-full flex justify-center p-6">
      {isLoading && <div className="skeleton w-full h-64"></div>}

      {isSuccess && (
        <article className="w-full max-w-3xl bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 flex flex-col items-center gap-6">
          {/* Imagen de la película */}
          <img
            src={data.poster}
            alt={data.title}
            className="w-60 h-80 rounded-lg shadow-lg object-cover"
          />

          {/* Información principal */}
          <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
            {data.title}
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 text-center">
            {data.synopsis}
          </p>

          {/* Información extra en grid */}
          <div className="w-full grid grid-cols-2 gap-4 text-center text-gray-600 dark:text-gray-300">
            <span className="font-semibold">🎭 Género:</span>
            <span>{getGenreName(Number(data.genre))}</span>

            <span className="font-semibold">⏳ Duración:</span>
            <span>{data.duration} min</span>

            <span className="font-semibold">🔞 Clasificación:</span>
            <span>{data.rating}</span>
          </div>

          {/* Link al tráiler */}
          <a
            href={data.trailerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg text-lg transition"
          >
            🎬 Ver tráiler
          </a>
        </article>
      )}

      {isError && <p className="text-red-500">No se pudo cargar la información de la película.</p>}
    </div>
  );
};

export default MovieDetails;
