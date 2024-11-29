import React, { useEffect, useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import MovieList from '../components/MovieList';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/SideBar';
import SearchBar from '../components/SearchBar';
import MovieDetail from '../components/MovieDetail';
import moviesData from '../movies.json';
import { movieImages } from '../constants/images';
import { Movie } from '../core/models/Movie';
import '../styles/App.css';


const App: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const updatedMovies = moviesData.movies.map((movie: Movie) => ({
      ...movie,
      poster: movieImages[movie.id] || '',
    }));
    setMovies(updatedMovies);
    setFilteredMovies(updatedMovies); 
  }, []);
  
  const handleSearch = (query: string) => {
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  const handleSelectMovie = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseMovieDetail = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="app-container">
      <Sidebar />
      <div className="content">
        <Header />
        <SearchBar onSearch={handleSearch} />
        <Routes>
          <Route
            path="/"
            element={<MovieList movies={filteredMovies} onSelect={handleSelectMovie} />}
          />
          <Route
            path="/page-2"
            element={
              <div>
                <h2>Page 2</h2>
                <Link to="/">Regresar a la cartelera</Link>
              </div>
            }
          />
        </Routes>
        <Footer />
      </div>
      {selectedMovie && (
        <MovieDetail movie={selectedMovie} onClose={handleCloseMovieDetail} />
      )}
    </div>
  );
};

export default App;
