import { AddButton } from '../../../components/buttons/add-button';
import { EditButton } from '../../../components/buttons/edit-button';
import { OptionButton } from '../../../components/buttons/option-button';
import { RemoveButton } from '../../../components/buttons/remove-button';
import { Columns } from '../../../components/tables/table-crud';

export const columnsProperties: (
  edit: (e: unknown) => void,
  deleteFn: (e: unknown) => void
) => Columns[] = (edit, deleteFn) => [
  {
    key: 'codigo',
    title: 'Codigo',
  },
  {
    key: 'capacidad',
    title: 'Capacidad',
  },
  {
    key: 'largo',
    title: 'Largo',
  },
  {
    key: 'ancho',
    title: 'Ancho',
  },

  {
    key: 'options',
    title: 'Opciones',
    component(element) {
      return (
        <>
          <EditButton onClick={() =>  edit(element)} />
          <RemoveButton onClick={() => deleteFn(element)} />
        </>
      );
    },
  },
];
