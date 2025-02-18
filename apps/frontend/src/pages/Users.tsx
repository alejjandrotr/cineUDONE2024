import React from 'react';
import { GridColDef } from '@mui/x-data-grid';
import DataTable from '../components/DataTable';
import { fetchUsers } from '../api/ApiCollection';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import AddData from '../components/AddData';

const Users = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { isLoading, isError, isSuccess, data } = useQuery({
    queryKey: ['allusers'],
    queryFn: fetchUsers,
  });

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'firstName',
      headerName: 'Titulo',
      minWidth: 220,
      flex: 1,
      renderCell: (params) => {
        return (
          <div className="flex gap-3 items-center">
            <div className="avatar">
              <div className="w-6 xl:w-9 rounded-full">
                <img
                  src={params.row.img || '/Portrait_Placeholder.png'}
                  alt="user-picture"
                />
              </div>
            </div>
            <span className="mb-0 pb-0 leading-none">
              {params.row.firstName} {params.row.lastName}
            </span>
          </div>
        );
      },
    },
    {
      field: 'Sinopsis',
      type: 'string',
      headerName: 'Sinopsis',
      minWidth: 200,
      flex: 1,
    },
    {
      field: 'Clasificacion',
      type: 'string',
      headerName: 'Clasificación',
      minWidth: 120,
      flex: 1,
    },
    {
      field: 'Tipo',
      headerName: 'Tipo',
      minWidth: 100,
      type: 'string',
      flex: 1,
    },
    {
      field: 'Duraccion',
      headerName: 'Duraccion (min)',
      width: 120,
    },
    {
      field: 'verified',
      headerName: 'Estado',
      width: 80,
      type: 'boolean',
      flex: 1,
    },
  ];

  React.useEffect(() => {
    if (isLoading) {
      toast.loading('Cargando...', { id: 'promiseUsers' });
    }
    if (isError) {
      toast.error('Error al obtener los datos!', {
        id: 'promiseUsers',
      });
    }
    if (isSuccess) {
      toast.success('Obtuve los datos exitosamente!', {
        id: 'promiseUsers',
      });
    }
  }, [isError, isLoading, isSuccess]);

  return (
    <div className="w-full p-0 m-0">
      <div className="w-full flex flex-col items-stretch gap-3">
        <div className="w-full flex justify-between mb-5">
          <div className="flex gap-1 justify-start flex-col items-start">
            <h2 className="font-bold text-2xl xl:text-4xl mt-0 pt-0 text-base-content dark:text-neutral-200">
              Peliculas
            </h2>
            {data && data.length > 0 && (
              <span className="text-neutral dark:text-neutral-content font-medium text-base">
                {data.length} Peliculas Agregadas
              </span>
            )}
          </div>
          <button
            onClick={() => setIsOpen(true)}
            className={`btn ${
              isLoading ? 'btn-disabled' : 'btn-primary'
            }`}
          >
            Añadir Nueva Peliculas +
          </button>
        </div>
        {isLoading ? (
          <DataTable
            slug="users"
            columns={columns}
            rows={[]}
            includeActionColumn={true}
          />
        ) : isSuccess ? (
          <DataTable
            slug="users"
            columns={columns}
            rows={data}
            includeActionColumn={true}
          />
        ) : (
          <>
            <DataTable
              slug="users"
              columns={columns}
              rows={[]}
              includeActionColumn={true}
            />
            <div className="w-full flex justify-center">
             ¡Error al obtener los datos!
            </div>
          </>
        )}

        {isOpen && (
          <AddData
            slug={'user'}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        )}
      </div>
    </div>
  );
};

export default Users;
