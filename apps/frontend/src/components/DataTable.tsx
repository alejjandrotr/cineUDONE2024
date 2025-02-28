import React, { useState } from 'react';
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import { HiOutlinePencilSquare, HiOutlineEye, HiOutlineTrash } from 'react-icons/hi2';
import toast from 'react-hot-toast';
import EditMovieModal from './EditMovie'; // Importa el modal de edición

interface DataTableProps {
  columns: GridColDef[];
  rows: object[];
  slug: string;
  includeActionColumn: boolean;
  onDelete?: (id: number) => void;
}

const DataTable: React.FC<DataTableProps> = ({ columns, rows, slug, includeActionColumn, onDelete }) => {
  const navigate = useNavigate();
  const [selectedMovie, setSelectedMovie] = useState<any | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleEditClick = (movie: any) => {
    setSelectedMovie(movie);
    setIsEditModalOpen(true);
  };

  const actionColumn: GridColDef = {
    field: 'action',
    headerName: 'Acciones',
    minWidth: 200,
    flex: 1,
    renderCell: (params) => (
      <div className="flex items-center">
        <button
          onClick={() => navigate(`/${slug}/${params.row.id}`)}
          className="btn btn-square btn-ghost"
        >
          <HiOutlineEye />
        </button>
        <button
          onClick={() => handleEditClick(params.row)}
          className="btn btn-square btn-ghost"
        >
          <HiOutlinePencilSquare />
        </button>
        <button
          onClick={() => {
            if (window.confirm('¿Estás seguro de que deseas eliminar esta película?')) {
              onDelete?.(params.row.id);
            }
          }}
          className="btn btn-square btn-ghost text-red-500 hover:bg-red-100"
        >
          <HiOutlineTrash />
        </button>
      </div>
    ),
  };

  return (
    <div className="w-full bg-base-100 text-base-content">
      <DataGrid
        className="dataGrid p-0 xl:p-3 w-full bg-base-100 text-white"
        rows={rows}
        columns={includeActionColumn ? [...columns, actionColumn] : columns}
        getRowHeight={() => 'auto'}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />

      {/* Modal de edición */}
      {selectedMovie && (
        <EditMovieModal
          isOpen={isEditModalOpen}
          setIsOpen={setIsEditModalOpen}
          movieId={selectedMovie.id}
        />
      )}
    </div>
  );
};

export default DataTable;
