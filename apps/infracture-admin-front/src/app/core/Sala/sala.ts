import { z } from 'zod';

export const SalaSchema = z.object({
  codigo: z.string(),
  capacidad: z.number(),
  largo: z.number(),
  ancho: z.number(),
});

export type Sala = z.infer<typeof SalaSchema>;

export const createNewSala: () => Sala = () => {
  return {
    codigo: '',
    capacidad: 25,
    largo: 12.5,
    ancho: 8,
  };
};
