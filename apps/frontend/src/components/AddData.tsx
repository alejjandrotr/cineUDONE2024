import React, { useState, useEffect, FormEvent } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { HiOutlineXMark } from 'react-icons/hi2';

interface AddDataProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddData: React.FC<AddDataProps> = ({ isOpen, setIsOpen }) => {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState('');
  const [synopsis, setSynopsis] = useState('');
  const [genre, setGenre] = useState('');
  const [scheduleDate, setScheduleDate] = useState('');
  const [scheduleRoom, setScheduleRoom] = useState('');
  const [type, setType] = useState('');
  const [rating, setRating] = useState('');
  const [duration, setDuration] = useState('');
  const [poster, setPoster] = useState('');
  const [price, setPrice] = useState('');
  const [trailerUrl, setTrailerUrl] = useState('');

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title || !synopsis || !type || !rating || !duration || !poster || !price || !trailerUrl) {
      toast.error('Todos los campos son obligatorios');
      return;
    }

    const genreArray = genre.split(',').map(g => parseInt(g.trim())).filter(g => !isNaN(g));
    if (genreArray.length < 1 || genreArray.length > 3) {
      toast.error('Debe ingresar entre 1 y 3 géneros');
      return;
    }

    if (!/^https?:\/\/.+/.test(poster) || !/^https?:\/\/.+/.test(trailerUrl)) {
      toast.error('Las URLs deben ser válidas');
      return;
    }

    const movieData = {
      title,
      synopsis,
      genre: genreArray,
      schedule: [{ date: scheduleDate, room: scheduleRoom }],
      type,
      rating,
      duration: parseInt(duration),
      poster,
      price: parseFloat(price),
      trailerUrl,
    };

    try {
      await axios.post('http://localhost:3001/api/movies', movieData);
      toast.success('Película agregada correctamente');
      setIsOpen(false);
    } catch (error) {
      console.error('Error al agregar película:', error);
      toast.error('Error al agregar película');
    }
  };

  return (
    <div className={`w-screen h-screen fixed top-0 left-0 flex justify-center items-center bg-black/75 z-50 ${showModal ? '' : 'hidden'}`}>
      <div className="w-[80%] xl:w-[50%] rounded-lg p-7 bg-white relative flex flex-col gap-5">
        <button onClick={() => setIsOpen(false)} className="absolute top-5 right-3 btn btn-ghost btn-circle">
          <HiOutlineXMark className="text-xl font-bold" />
        </button>
        <span className="text-2xl font-bold">Añadir Película</span>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <input type="text" placeholder="Título" className="input input-bordered" value={title} onChange={(e) => setTitle(e.target.value)} required />
          <input type="text" placeholder="Sinopsis" className="input input-bordered" value={synopsis} onChange={(e) => setSynopsis(e.target.value)} required />
          <input type="text" placeholder="Géneros (ej: 1,2,3)" className="input input-bordered" value={genre} onChange={(e) => setGenre(e.target.value)} required />
          <input type="date" className="input input-bordered" value={scheduleDate} onChange={(e) => setScheduleDate(e.target.value)} required />
          <input type="text" placeholder="Sala" className="input input-bordered" value={scheduleRoom} onChange={(e) => setScheduleRoom(e.target.value)} required />
          <input type="text" placeholder="Tipo" className="input input-bordered" value={type} onChange={(e) => setType(e.target.value)} required />
          <input type="text" placeholder="Clasificación" className="input input-bordered" value={rating} onChange={(e) => setRating(e.target.value)} required />
          <input type="number" placeholder="Duración (min)" className="input input-bordered" value={duration} onChange={(e) => setDuration(e.target.value)} required min="1" />
          <input type="text" placeholder="URL del póster" className="input input-bordered" value={poster} onChange={(e) => setPoster(e.target.value)} required pattern="https?://.*" />
          <input type="number" placeholder="Precio" className="input input-bordered" value={price} onChange={(e) => setPrice(e.target.value)} required min="1" />
          <input type="text" placeholder="URL del tráiler" className="input input-bordered" value={trailerUrl} onChange={(e) => setTrailerUrl(e.target.value)} required pattern="https?://.*" />
          <button className="mt-5 btn btn-primary btn-block col-span-full">Agregar</button>
        </form>
      </div>
    </div>
  );
};

export default AddData;
