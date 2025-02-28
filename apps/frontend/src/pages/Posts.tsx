// Posts.tsx
import React from 'react';
import { GridColDef } from '@mui/x-data-grid';
import DataTable from '../components/DataTable';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { fetchPosts } from '../api/ApiCollection';
import { HiOutlineGlobeAmericas, HiOutlineLockClosed } from 'react-icons/hi2';
import SocialShare from '../components/SocialShare';

const Posts = () => {
  // Consultamos los datos
  const { isLoading, isError, isSuccess, data } = useQuery({
    queryKey: ['allorders'],
    queryFn: fetchPosts,
  });

  // Estado para controlar la visibilidad del plugin SocialShare
  const [isShareOpen, setIsShareOpen] = React.useState(false);

  // Función para manejar la publicación desde SocialShare
  const handlePublish = (dataPublicacion: any) => {
    console.log('Datos de la publicación:', dataPublicacion);
    // Aquí podrías llamar a alguna API o agregar lógica adicional
  };

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', minWidth: 90 },
    {
      field: 'title',
      headerName: 'Title',
      minWidth: 500,
      flex: 1,
      renderCell: (params) => (
        <div className="flex gap-3 relative items-center py-2">
          <div className="w-20 h-12 sm:w-24 sm:h-14 xl:w-32 xl:h-[72px] rounded relative overflow-hidden">
            <img
              src={params.row.thumbnail || 'https://placehold.co/720x400'}
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
            <div className="relative w-[300px] xl:w-[320px] overflow-hidden">
              <p className="text-[14px] leading-[1.1] overflow-hidden line-clamp-2 text-neutral-400">
                {params.row.desc}
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      field: 'tags',
      headerName: 'Tags',
      minWidth: 250,
      flex: 1,
      renderCell: (params) => (
        <div className="flex flex-wrap gap-1">
          {params.row.tags &&
            params.row.tags.map((tag: string, index: number) => (
              <div
                key={index}
                className="rounded-full bg-base-200 dark:bg-base-300 flex justify-center items-center px-3 py-1 text-xs"
              >
                {tag}
              </div>
            ))}
        </div>
      ),
    },
    {
      field: 'author',
      headerName: 'Author',
      minWidth: 220,
      flex: 1,
      renderCell: (params) => (
        <div className="flex gap-3 items-center">
          <div className="avatar">
            <div className="w-6 xl:w-9 rounded-full">
              <img
                src={params.row.avatar || '/Portrait_Placeholder.png'}
                alt="user-picture"
              />
            </div>
          </div>
          <span className="mb-0 pb-0 leading-none">{params.row.author}</span>
        </div>
      ),
    },
    {
      field: 'visibility',
      headerName: 'Visibility',
      minWidth: 100,
      flex: 1,
      renderCell: (params) => {
        if (params.row.visibility === 'Public') {
          return (
            <div className="flex gap-1 items-center">
              <HiOutlineGlobeAmericas className="text-lg" />
              <span className="p-0 mt-[1px] leading-none">{params.row.visibility}</span>
            </div>
          );
        } else if (params.row.visibility === 'Private') {
          return (
            <div className="flex gap-1 items-center">
              <HiOutlineLockClosed className="text-lg" />
              <span className="p-0 mt-[1px] leading-none">{params.row.visibility}</span>
            </div>
          );
        } else {
          return <span>Unknown</span>;
        }
      },
    },
    { field: 'date', type: 'string', headerName: 'Date', minWidth: 100 },
    { field: 'views', type: 'number', headerName: 'Views', minWidth: 120 },
    {
      field: 'comments',
      type: 'number',
      headerName: 'Comments',
      minWidth: 120,
      renderCell: (params) => <div>{params.row.comments && params.row.comments.length}</div>,
    },
    { field: 'likes', type: 'number', headerName: 'Likes', minWidth: 80 },
  ];

  React.useEffect(() => {
    if (isLoading) {
      toast.loading('Loading...', { id: 'promisePosts' });
    }
    if (isError) {
      toast.error('Error while getting the data!', { id: 'promisePosts' });
    }
    if (isSuccess) {
      toast.success('Got the data successfully!', { id: 'promisePosts' });
    }
  }, [isError, isLoading, isSuccess]);

  return (
    // Envolvemos en un contenedor con ancho máximo para que no se extienda demasiado
    <div className="w-full p-4 m-0 overflow-x-hidden">
      <div className="max-w-screen-xl mx-auto">
        {/* Encabezado de la vista */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex flex-col">
            <h2 className="font-bold text-2xl sm:text-3xl xl:text-4xl text-base-content dark:text-neutral-200">
              Posts
            </h2>
            {data && data.length > 0 && (
              <span className="text-neutral dark:text-neutral-content font-medium text-base">
                {data.length} Posts Found
              </span>
            )}
          </div>
          {/* Contenedor del botón para evitar overflow */}
          <div className="w-full sm:w-auto flex justify-end">
            <button
              onClick={() => setIsShareOpen(true)}
              className={`btn ${isLoading ? 'btn-disabled' : 'btn-primary'} w-full max-w-xs sm:max-w-none`}
            >
              Compartir en Redes
            </button>
          </div>
        </div>
        {/* Tabla de datos */}
        <div className="mt-4">
          {isLoading ? (
            <DataTable slug="orders" columns={columns} rows={[]} includeActionColumn={false} />
          ) : isSuccess ? (
            <DataTable slug="orders" columns={columns} rows={data} includeActionColumn={false} />
          ) : (
            <div className="flex flex-col gap-4">
              <DataTable slug="orders" columns={columns} rows={[]} includeActionColumn={false} />
              <div className="flex justify-center">Error while getting the data!</div>
            </div>
          )}
        </div>
        {/* Renderizado condicional del plugin SocialShare */}
        {isShareOpen && (
          <SocialShare onClose={() => setIsShareOpen(false)} onPublish={handlePublish} />
        )}
      </div>
    </div>
  );
};

export default Posts;
