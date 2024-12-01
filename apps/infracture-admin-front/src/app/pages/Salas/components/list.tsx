import { useEffect, useState } from 'react';
import TableCrud, { Columns } from '../../../components/tables/table-crud';
import { Sala } from '../../../core/Sala/sala';
import { columnsProperties } from './columns-properties';
import { salaRepository } from '../../../core/Sala/sala.api';
import { subscribe } from '../../../core/events';
import { ENTITIES_KEYS } from '../../../core/enums/entity-keys';

export const List = () => {
  const [data, setData] = useState<Sala[]>([]);
  const columns: Columns[] = columnsProperties(edit, deleteFn);

  function updateData() {
    salaRepository.get().then((data: Sala[]) => {
      console.log(data);
      setData(data);
    });
  }

  useEffect(() => {
    updateData();
    subscribe(ENTITIES_KEYS.SALA, () =>{
      updateData();
    })
  }, []);
  return <TableCrud {...{ data, columns }} />;
};


function edit(): void {
  throw new Error('Function not implemented.');
}

function deleteFn(e: Sala): void {
  const resp = confirm('¿Desea eliminar la sala?')
  if (resp === true){
    salaRepository.delete(e.id);
  }
}

