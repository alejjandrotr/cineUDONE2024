import React, { useEffect, useState } from 'react';
import { GridColDef } from '@mui/x-data-grid';
import DataTable from '../components/DataTable';
import { fetchMovies } from '../api/ApiCollection';
import toast from 'react-hot-toast';
import AddData from '../components/AddData';

const Pelicula = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const data = await fetchMovies();
        setMovies(data);
        toast.success('Películas obtenidas correctamente!');
      } catch (error) {
        setIsError(true);
        toast.error('Error al obtener las películas');
      } finally {
        setIsLoading(false);
      }
    };

    getMovies();
  }, []);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'title', type: 'string', headerName: 'Título', minWidth: 220, flex: 1 },
    { field: 'synopsis', type: 'string', headerName: 'Sinopsis', minWidth: 200, flex: 1 },
    { field: 'rating', type: 'string', headerName: 'Clasificación', minWidth: 120, flex: 1 },
    { field: 'type', headerName: 'Tipo', minWidth: 100, type: 'string', flex: 1 },
    { field: 'duration', headerName: 'Duración (min)', width: 120 },
    { field: 'price', headerName: 'Precio ($)', width: 100 },
  ];

  return (
    <div className="w-full p-0 m-0">
      <div className="w-full flex flex-col items-stretch gap-3">
        <div className="w-full flex justify-between mb-5">
          <div className="flex gap-1 justify-start flex-col items-start">
            <h2 className="font-bold text-2xl xl:text-4xl mt-0 pt-0 text-base-content dark:text-neutral-200">
              Películas
            </h2>
            {movies.length > 0 && (
              <span className="text-neutral dark:text-neutral-content font-medium text-base">
                {movies.length} Películas Agregadas
              </span>
            )}
          </div>
          <button
            onClick={() => setIsOpen(true)}
            className={`btn ${isLoading ? 'btn-disabled' : 'btn-primary'}`}
          >
            Añadir Nueva Película +
          </button>
        </div>

        {isLoading ? (
          <p>Cargando películas...</p>
        ) : isError ? (
          <p>¡Error al obtener los datos!</p>
        ) : (
          <DataTable slug="movies" columns={columns} rows={movies} includeActionColumn={true} />
        )}

        {isOpen && <AddData slug={'movie'} isOpen={isOpen} setIsOpen={setIsOpen} />}
      </div>
    </div>
  );
};

export default Pelicula;
