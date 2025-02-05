import { Schedule } from '../../constants/schedules';

export type Movie = {
  id: number;
  title: string;
  genre: number[];
  schedule: Schedule[]; 
  type: string;
  rating: string;
  duration: number;
  poster?: string;
  synopsis: string;
  price: number;
  trailerUrl: string;
};