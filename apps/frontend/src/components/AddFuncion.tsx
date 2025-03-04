import React, { useState, useEffect, FormEvent } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { HiOutlineXMark } from 'react-icons/hi2';
import { fetchMovies, fetchFunciones } from '../api/ApiCollection'; // 🔹 Importamos las funciones centralizadas

interface Movie {
  id: number;
  title: string;
  duration: number; // Duración en minutos
}

interface Funciones {
  id: number;
  movieId: number;
  sala: string;
  date: string;
  horarioInicio: string; // Hora en formato HH:mm
  horarioFin: string;
}

interface AddFuncionesProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  slug: string;
}

const AddFunciones: React.FC<AddFuncionesProps> = ({ isOpen, setIsOpen }) => {
  const [showModal, setShowModal] = useState(false);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState('');
  const [sala, setSala] = useState('');
  const [date, setDate] = useState('');
  const [horarioInicio, setHorarioInicio] = useState('');
  const [horarioFin, setHorarioFin] = useState('');
  const [funciones, setFunciones] = useState<Funciones[]>([]);

  useEffect(() => {
    setShowModal(isOpen);
    if (isOpen) {
      fetchMovies().then(setMovies).catch(console.error);
      fetchFunciones().then(setFunciones).catch(console.error);
    }
  }, [isOpen]);

  // 🔹 Calcula la hora de finalización cuando se selecciona una película o cambia la hora de inicio
  useEffect(() => {
    calcularHoraFin();
  }, [selectedMovie, horarioInicio]);

  const calcularHoraFin = () => {
    if (!selectedMovie || !horarioInicio) {
      setHorarioFin('');
      return;
    }

    const movie = movies.find((m) => m.id.toString() === selectedMovie);
    if (!movie) return;

    const [hh, mm] = horarioInicio.split(':').map(Number);
    const nuevaHora = new Date();
    nuevaHora.setHours(hh);
    nuevaHora.setMinutes(mm + movie.duration); // 🔹 Sumamos la duración de la película en minutos

    const nuevaHoraStr = nuevaHora.toTimeString().slice(0, 5);
    setHorarioFin(nuevaHoraStr);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedMovie || !sala || !date || !horarioInicio || !horarioFin) {
      toast.error('Todos los campos son obligatorios');
      return;
    }

    const functionData = {
      movieId: parseInt(selectedMovie),
      sala,
      date,
      horarioInicio,
      horarioFin
    };

    console.log('Datos enviados al backend:', functionData);

    try {
      await axios.post('http://localhost:3001/api/funciones', functionData);
      toast.success('Función agregada correctamente');
      setIsOpen(false);
    } catch (error) {
      console.error('Error al agregar función:', error);
      toast.error('Error al agregar función');
    }
  };

  return (
    <div className={`w-screen h-screen fixed top-0 left-0 flex justify-center items-center bg-black/75 z-50 ${showModal ? '' : 'hidden'}`}>
      <div className="w-[80%] xl:w-[50%] rounded-lg p-7 bg-white relative flex flex-col gap-5">
        <button onClick={() => setIsOpen(false)} className="absolute top-5 right-3 btn btn-ghost btn-circle">
          <HiOutlineXMark className="text-xl font-bold" />
        </button>
        <span className="text-2xl font-bold">Añadir Función</span>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <select
            className="input input-bordered"
            value={selectedMovie}
            onChange={(e) => setSelectedMovie(e.target.value)}
            required
          >
            <option value="">Seleccione una película</option>
            {movies.map((movie) => (
              <option key={movie.id} value={movie.id}>
                {movie.title}
              </option>
            ))}
          </select>
          <select className="input input-bordered" value={sala} onChange={(e) => setSala(e.target.value)} required>
            <option value="">Seleccione una sala</option>
            {[...Array(10).keys()].map((num) => (
              <option key={num + 1} value={(num + 1).toString()}>
                Sala {num + 1}
              </option>
            ))}
          </select>
          <input type="date" className="input input-bordered" value={date} onChange={(e) => setDate(e.target.value)} required />
          <input type="time" className="input input-bordered" value={horarioInicio} onChange={(e) => setHorarioInicio(e.target.value)} required />
          <input type="time" className="input input-bordered bg-gray-200" value={horarioFin} readOnly placeholder="Hora de finalización" />
          <button className="mt-5 btn btn-primary btn-block col-span-full">Agregar</button>
        </form>
      </div>
    </div>
  );
};

export default AddFunciones;
