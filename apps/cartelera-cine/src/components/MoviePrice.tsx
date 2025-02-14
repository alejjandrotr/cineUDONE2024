import React from 'react';
import '../styles/MoviePrice.css'; 
interface MoviePriceProps {
  price: number;
}

const MoviePrice: React.FC<MoviePriceProps> = ({ price }) => {
  return (
    <div className="precio">Precio Boleto: {price} Bs</div>
  );
};

export default MoviePrice;

