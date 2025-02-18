import React from 'react';
import { GridColDef } from '@mui/x-data-grid';
import DataTable from '../components/DataTable';
import { fetchProducts } from '../api/ApiCollection';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import AddData from '../components/AddData';

const Products = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { isLoading, isError, isSuccess, data } = useQuery({
    queryKey: ['allproducts'],
    queryFn: fetchProducts,
  });

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'img',
      headerName: 'Pelicula',
      minWidth: 300,
      flex: 1,
      renderCell: (params) => {
        return (
          <div className="flex gap-3 items-center">
            <div className="w-6 xl:w-10 overflow-hidden flex justify-center items-center">
              <img
                src={params.row.img || '/corrugated-box.jpg'}
                alt="product-picture"
                className="object-cover"
              />
            </div>
            <span className="mb-0 pb-0 leading-none">
              {params.row.title}
            </span>
          </div>
        );
      },
    },
    {
      field: 'Horario',
      type: 'string',
      headerName: 'Horario',
      minWidth: 100,
      flex: 1,
    },
    {
      field: 'Sala',
      headerName: 'Sala',
      type: 'string',
      minWidth: 100,
      flex: 1,
    },
    {
      field: 'Estado',
      headerName: 'Estado',
      minWidth: 80,
      type: 'boolean',
      flex: 1,
    },
  ];

  React.useEffect(() => {
    if (isLoading) {
      toast.loading('Cargando...', { id: 'promiseProducts' });
    }
    if (isError) {
      toast.error('Error al obtener los datos!', {
        id: 'promiseProducts',
      });
    }
    if (isSuccess) {
      toast.success('Obtuve los datos exitosamente!', {
        id: 'promiseProducts',
      });
    }
  }, [isError, isLoading, isSuccess]);

  return (
    <div className="w-full p-0 m-0">
      <div className="w-full flex flex-col items-stretch gap-3">
        <div className="w-full flex justify-between xl:mb-5">
          <div className="flex gap-1 justify-start flex-col items-start">
            <h2 className="font-bold text-2xl xl:text-4xl mt-0 pt-0 text-base-content dark:text-neutral-200">
              Funciones
            </h2>
            {data && data.length > 0 && (
              <span className="text-neutral dark:text-neutral-content font-medium text-base">
                {data.length} Funciones Encontradas
              </span>
            )}
          </div>
          <button
            onClick={() => setIsOpen(true)}
            className={`btn ${
              isLoading ? 'btn-disabled' : 'btn-primary'
            }`}
          >
            Crear Nueva Funcion +
          </button>
        </div>

        {isLoading ? (
          <DataTable
            slug="products"
            columns={columns}
            rows={[]}
            includeActionColumn={true}
          />
        ) : isSuccess ? (
          <DataTable
            slug="products"
            columns={columns}
            rows={data}
            includeActionColumn={true}
          />
        ) : (
          <>
            <DataTable
              slug="products"
              columns={columns}
              rows={[]}
              includeActionColumn={true}
            />
            <div className="w-full flex justify-center">
              Error al obtener los datos!
            </div>
          </>
        )}

        {isOpen && (
          <AddData
            slug={'product'}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        )}
      </div>
    </div>
  );
};

export default Products;
