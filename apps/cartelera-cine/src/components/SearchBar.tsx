import React, { useState } from 'react';
import '../styles/SearchBar.css';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState(''); // Solo necesitamos un estado para `query`

  // Cada vez que el valor del input cambia, se llama a `onSearch`
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;
    setQuery(newQuery);  // Actualizamos el estado de `query`
    onSearch(newQuery);  // Pasamos el valor de `query` a `onSearch` directamente
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query} // El valor del input está controlado por `query`
        onChange={handleChange} // Llamamos a `handleChange` cada vez que se escribe
        placeholder="Buscar en cartelera..."
      />
    </div>
  );
};

export default SearchBar;
