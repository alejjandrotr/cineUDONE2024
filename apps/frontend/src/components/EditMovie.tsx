import React, { useState, useEffect, FormEvent } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { HiOutlineXMark } from 'react-icons/hi2';
import { genres } from '../../../cartelera-cine/src/constants/genres';

interface EditMovieProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  movieId: number | null;
}

const EditMovie: React.FC<EditMovieProps> = ({ isOpen, setIsOpen, movieId }) => {
  const [showModal, setShowModal] = useState(false);
  const [movieData, setMovieData] = useState({
    title: '',
    synopsis: '',
    genre: '',
    type: '',
    rating: '',
    duration: '',
    poster: '',
    trailerUrl: '',
  });

  useEffect(() => {
    setShowModal(isOpen);
    if (movieId) {
      axios.get(`http://localhost:3001/api/movies/${movieId}`)
        .then(response => setMovieData(response.data))
        .catch(error => console.error('Error fetching movie:', error));
    }
  }, [isOpen, movieId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setMovieData({ ...movieData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:3001/api/edit-movies/${movieId}`, movieData);
      toast.success('Película actualizada correctamente');
      setIsOpen(false);
    } catch (error) {
      console.error('Error al actualizar película:', error);
      toast.error('Error al actualizar película');
    }
  };

  return (
    <div className={`w-screen h-screen fixed top-0 left-0 flex justify-center items-center bg-black/75 z-50 ${showModal ? '' : 'hidden'}`}>
      <div className="w-[80%] xl:w-[50%] rounded-lg p-7 bg-white relative flex flex-col gap-5">
        <button onClick={() => setIsOpen(false)} className="absolute top-5 right-3 btn btn-ghost btn-circle">
          <HiOutlineXMark className="text-xl font-bold" />
        </button>
        <span className="text-2xl font-bold">Editar Película</span>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <input name="title" type="text" placeholder="Título" className="input input-bordered" value={movieData.title} onChange={handleChange} required />
          <input name="synopsis" type="text" placeholder="Sinopsis" className="input input-bordered" value={movieData.synopsis} onChange={handleChange} required />
          <select name="genre" className="select select-bordered" value={movieData.genre} onChange={handleChange} required>
            <option value="" disabled>Seleccione un género</option>
            {genres.map(g => (
              <option key={g.id} value={g.id}>{g.name}</option>
            ))}
          </select>
          <input name="rating" type="text" placeholder="Clasificación" className="input input-bordered" value={movieData.rating} onChange={handleChange} required />
          <input name="duration" type="number" placeholder="Duración (min)" className="input input-bordered" value={movieData.duration} onChange={handleChange} required min="1" />
          <input name="poster" type="text" placeholder="URL del póster" className="input input-bordered" value={movieData.poster} onChange={handleChange} required />
          <input name="trailerUrl" type="text" placeholder="URL del tráiler" className="input input-bordered" value={movieData.trailerUrl} onChange={handleChange} required />
          <button className="mt-5 btn btn-primary btn-block col-span-full">Actualizar</button>
        </form>
      </div>
    </div>
  );
};

export default EditMovie;
