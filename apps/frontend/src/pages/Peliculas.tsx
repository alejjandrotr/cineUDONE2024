import React from 'react';
import { GridColDef } from '@mui/x-data-grid';
import DataTable from '../components/DataTable';
// import { fetchUsers } from '../api/ApiCollection';
//import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import AddData from '../components/AddData';

const Pelicula = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  // Datos de prueba para que la tabla no se desconfigure
  const peliculasEjemplo = [
    { id: 1, firstName: 'Mufasa: El Rey León', Sinopsis: 'La historia presenta a Mufasa como un cachorro huérfano, perdido y solo hasta que conoce a un simpático león llamado Taka, heredero de un linaje real.', Clasificacion: 'A', Tipo: 'Acción', Duraccion: 120, verified: true },
    { id: 2, firstName: 'Moana 2', Sinopsis: 'Moana y sus amigos exploran el Pacífico Sur en una serie animada musical.', Clasificacion: 'A', Tipo: 'Animada', Duraccion: 100, verified: false },
  ];

  // Simulamos la estructura de useQuery sin hacer una consulta real
  const isLoading = false;
  const isError = false;
  const isSuccess = true;
  const data = peliculasEjemplo;

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'firstName', type: 'string', headerName: 'Título', minWidth: 220, flex: 1 },
    { field: 'Sinopsis', type: 'string', headerName: 'Sinopsis', minWidth: 200, flex: 1 },
    { field: 'Clasificacion', type: 'string', headerName: 'Clasificación', minWidth: 120, flex: 1 },
    { field: 'Tipo', headerName: 'Tipo', minWidth: 100, type: 'string', flex: 1 },
    { field: 'Duraccion', headerName: 'Duración (min)', width: 120 },
    { field: 'verified', headerName: 'Estado', width: 80, type: 'boolean', flex: 1 },
  ];

  React.useEffect(() => {
    if (isLoading) {
      toast.loading('Cargando...', { id: 'promiseUsers' });
    }
    if (isError) {
      toast.error('Error al obtener los datos!', { id: 'promiseUsers' });
    }
    if (isSuccess) {
      toast.success('Obtuve los datos exitosamente!', { id: 'promiseUsers' });
    }
  }, [isError, isLoading, isSuccess]);

  return (
    <div className="w-full p-0 m-0">
      <div className="w-full flex flex-col items-stretch gap-3">
        <div className="w-full flex justify-between mb-5">
          <div className="flex gap-1 justify-start flex-col items-start">
            <h2 className="font-bold text-2xl xl:text-4xl mt-0 pt-0 text-base-content dark:text-neutral-200">
              Películas
            </h2>
            {data && data.length > 0 && (
              <span className="text-neutral dark:text-neutral-content font-medium text-base">
                {data.length} Películas Agregadas
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
          <DataTable slug="users" columns={columns} rows={[]} includeActionColumn={true} />
        ) : isSuccess ? (
          <DataTable slug="users" columns={columns} rows={data} includeActionColumn={true} />
        ) : (
          <>
            <DataTable slug="users" columns={columns} rows={[]} includeActionColumn={true} />
            <div className="w-full flex justify-center">
              ¡Error al obtener los datos!
            </div>
          </>
        )}

        {isOpen && <AddData slug={'user'} isOpen={isOpen} setIsOpen={setIsOpen} />}
      </div>
    </div>
  );
};

export default Pelicula;
