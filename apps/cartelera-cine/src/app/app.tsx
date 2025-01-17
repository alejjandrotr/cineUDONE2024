import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/SideBar';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';
import MovieDetail from '../components/MovieDetail';
import useMovies from '../components/useMovies';
import { Movie } from '../core/models/Movie';
import '../styles/App.css';

const App: React.FC = () => {
  const { filteredMovies, handleSearch } = useMovies();
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

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
          <Route path="/page-2" element={<h2>Page 2</h2>} />
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
