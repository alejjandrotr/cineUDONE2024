import { useEffect, useState } from 'react';
import { Sala } from './core/Sala/sala';
import { salaRepository } from './core/Sala/sala.api';

/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 This is a starter component and can be deleted.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 Delete this file and get started with your project!
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
export function NxWelcome({ title }: { title: string }) {
  const [salas, setSalas] = useState<Sala[]>([]);

  useEffect(() => {
    salaRepository.get().then((data) => {console.log(data); setSalas(data)});
  }, []);
  return (
    <>
      <div>
        {salas.map((sala) => (
          <p class="text-center">{sala.codigo}</p>
        ))}
      </div>
    </>
  );
}

export default NxWelcome;
