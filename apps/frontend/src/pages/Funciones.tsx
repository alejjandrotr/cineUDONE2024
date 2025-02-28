import React, { useEffect, useState } from 'react';
import { GridColDef } from '@mui/x-data-grid';
import DataTable from '../components/DataTable';
import toast from 'react-hot-toast';
import AddFuncion from '../components/AddFuncion';
import { fetchFunciones, fetchMovies } from '../api/ApiCollection';

const Funciones = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [funciones, setFunciones] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getFunciones = async () => {
      try {
        const [funcionesData, moviesData] = await Promise.all([
          fetchFunciones(),
          fetchMovies(),
        ]);

        const movieMap = moviesData.reduce((acc: Record<number, string>, movie: { id: number; title: string }) => {
          acc[movie.id] = movie.title;
          return acc;
        }, {} as Record<number, string>);

        const formattedData = funcionesData.map((funcion: any) => ({
          id: funcion.id,
          title: movieMap[funcion.movieId] || 'Título no disponible',
          horarioInicio: funcion.horarioInicio,
          horarioFin: funcion.horarioFin,
          Sala: funcion.sala,
          Estado: true,
        }));

        setFunciones(formattedData);
        toast.success('Datos cargados correctamente!', { id: 'fetchFunciones' });
      } catch (error) {
        toast.error('Error al cargar las funciones');
      } finally {
        setLoading(false);
      }
    };

    getFunciones();
  }, []);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'title', headerName: 'Película', minWidth: 300, flex: 1 },
    { field: 'horarioInicio', type: 'string', headerName: 'Horario Inicio', minWidth: 150, flex: 1 },
    { field: 'horarioFin', type: 'string', headerName: 'Horario Fin', minWidth: 150, flex: 1 },
    { field: 'Sala', headerName: 'Sala', type: 'string', minWidth: 100, flex: 1 },
    { field: 'Estado', headerName: 'Estado', minWidth: 80, type: 'boolean', flex: 1 },
  ];

  return (
    <div className="w-full p-0 m-0">
      <div className="w-full flex flex-col items-stretch gap-3">
        <div className="w-full flex justify-between xl:mb-5">
          <div className="flex gap-1 justify-start flex-col items-start">
            <h2 className="font-bold text-2xl xl:text-4xl mt-0 pt-0 text-base-content dark:text-neutral-200">
              Funciones
            </h2>
            <span className="text-neutral dark:text-neutral-content font-medium text-base">
              {loading ? 'Cargando...' : `${funciones.length} Funciones Encontradas`}
            </span>
          </div>
          <button onClick={() => setIsOpen(true)} className="btn btn-primary">
            Crear Nueva Función +
          </button>
        </div>

        <DataTable slug="funciones" columns={columns} rows={loading ? [] : funciones} includeActionColumn={false} />

        {isOpen && (
          <AddFuncion slug={'funcion'} isOpen={isOpen} setIsOpen={setIsOpen} />
        )}
      </div>
    </div>
  );
};

export default Funciones;
