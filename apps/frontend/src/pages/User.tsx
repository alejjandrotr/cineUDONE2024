import React from 'react';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

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

  return (
    <div className="w-full p-5">
      {isLoading && <div className="skeleton w-full h-64"></div>}
      {isSuccess && (
        <div className="flex flex-col items-center gap-5">
          <img src={data.poster} alt={data.title} className="w-48 h-72 rounded-lg" />
          <h1 className="text-3xl font-bold">{data.title}</h1>
          <p className="text-lg">{data.synopsis}</p>
          <span className="text-gray-500">Género: {data.genre.join(', ')}</span>
          <span className="text-gray-500">Duración: {data.duration} min</span>
          <span className="text-gray-500">Clasificación: {data.rating}</span>
          <span className="text-gray-500">Precio: ${data.price}</span>
          <a href={data.trailerUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
            Ver tráiler
          </a>
        </div>
      )}
      {isError && <p className="text-red-500">No se pudo cargar la información de la película.</p>}
    </div>
  );
};

export default MovieDetails;
