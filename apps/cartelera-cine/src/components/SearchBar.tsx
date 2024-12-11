import React, { useState } from 'react';
import '../styles/SearchBar.css';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState(''); 

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;
    setQuery(newQuery);  
    onSearch(newQuery);  
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query} 
        onChange={handleChange} 
        placeholder="Buscar en cartelera..."
      />
    </div>
  );
};

export default SearchBar;
