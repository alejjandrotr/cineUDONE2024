import React from 'react';
import { GridColDef } from '@mui/x-data-grid';
import DataTable from '../components/DataTable';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import AddData from '../components/AddData';
import { fetchPosts } from '../api/ApiCollection';
import {
  HiOutlineGlobeAmericas,
  HiOutlineLockClosed,
} from 'react-icons/hi2';

const Posts = () => {
  // const [isOpen, setIsOpen] = React.useState(false);
  const { isLoading, isError, isSuccess, data } = useQuery({
    queryKey: ['allorders'],
    queryFn: fetchPosts,
  });

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', minWidth: 90 },
    {
      field: 'title',
      headerName: 'Titulo',
      minWidth: 500,
      flex: 1,
      renderCell: (params) => {
        return (
          <div className="flex gap-3 relative items-center py-2">
            <div className="w-20 h-12 sm:w-24 sm:h-14 xl:w-32 xl:h-[72px] rounded relative overflow-hidden">
              <img
                src={
                  params.row.thumbnail ||
                  'https://placehold.co/720x400'
                }
                alt="thumbnail-picture"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex flex-col items-start gap-0">
              <div className="relative w-[300px] xl:w-[320px] overflow-hidden text-ellipsis whitespace-nowrap">
                <span className="text-ellipsis whitespace-nowrap text-base font-medium dark:text-white">
                  {params.row.title}
                </span>
              </div>
              <div className="relative w-[300px] xl:w-[320px] overflow-hidden ">
                <p className="text-[14px] leading-[1.1] overflow-hidden line-clamp-2 text-neutral-400">
                  {params.row.desc}
                </p>
              </div>
            </div>
          </div>
        );
      },
    },
    {
      field: 'date',
      type: 'string',
      headerName: 'Fecha',
      minWidth: 100,
    },
    {
      field: 'views',
      type: 'number',
      headerName: 'Vistas',
      minWidth: 120,
    },
    {
      field: 'comments',
      type: 'number',
      headerName: 'Comentarios',
      minWidth: 120,
      renderCell: (params) => {
        return (
          <div>
            {params.row.comments && params.row.comments.length}
          </div>
        );
      },
    },
    {
      field: 'likes',
      type: 'number',
      headerName: 'Me Gustas',
      minWidth: 80,
    },
  ];

  React.useEffect(() => {
    if (isLoading) {
      toast.loading('Cargando...', { id: 'promisePosts' });
    }
    if (isError) {
      toast.error('Error al obtener los datos!', {
        id: 'promisePosts',
      });
    }
    if (isSuccess) {
      toast.success('Obtuve los datos exitosamente!', {
        id: 'promisePosts',
      });
    }
  }, [isError, isLoading, isSuccess]);

  return (
    <div className="w-full p-0 m-0">
      <div className="w-full flex flex-col items-stretch gap-3">
        <div className="w-full flex justify-between mb-5">
          <div className="flex gap-1 justify-start flex-col items-start">
            <h2 className="font-bold text-2xl xl:text-4xl mt-0 pt-0 text-base-content dark:text-neutral-200">
              Posts
            </h2>
            {data && data.length > 0 && (
              <span className="text-neutral dark:text-neutral-content font-medium text-base">
                {data.length} Posts Encontrados
              </span>
            )}
          </div>

        </div>
        {isLoading ? (
          <DataTable
            slug="orders"
            columns={columns}
            rows={[]}
            includeActionColumn={false}
          />
        ) : isSuccess ? (
          <DataTable
            slug="orders"
            columns={columns}
            rows={data}
            includeActionColumn={false}
          />
        ) : (
          <>
            <DataTable
              slug="orders"
              columns={columns}
              rows={[]}
              includeActionColumn={false}
            />
            <div className="w-full flex justify-center">
              Error al obtener los datos!
            </div>
          </>
        )}

      </div>
    </div>
  );
};

export default Posts;
