import React from 'react';

const Home = () => {
  return (
    <div className="home w-full h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-purple-900">
      {/* Mensaje de bienvenida con estilo serio y moderno */}
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4 transform hover:scale-105 transition-transform duration-500">
          🎬 ¡Bienvenido al Sistema del Cine! 🍿
        </h1>
        <p className="text-xl text-white opacity-80">
          Gestiona tus películas y horarios.
        </p>
      </div>
    </div>
  );
};

export default Home;
