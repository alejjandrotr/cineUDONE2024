import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001/api/movies';
//const PRICE_API_URL = 'http://localhost:3002/api/precio';
const FUNCTIONS_API_URL = `http://localhost:3001/api/funciones`;

export const fetchMovies = async () => {
  try {
    const moviesResponse = await axios.get(`${API_BASE_URL}`);
    const moviesData = moviesResponse.data;

    //const pricesResponse = await axios.get(PRICE_API_URL);
    //const pricesData = pricesResponse.data;

    const functionsResponse = await axios.get(FUNCTIONS_API_URL);
    const functionsData = functionsResponse.data;

    const updatedMovies = moviesData.map((movie: any) => {
      //const priceInfo = pricesData.find((p: any) => p.movieId === movie.id);
      const movieFunctions = functionsData.filter((f: any) => f.movieId === movie.id); // Obtener funciones de la película

      return {
        ...movie,
       // price: priceInfo ? priceInfo.price : 'No disponible',
       schedule: movieFunctions.map((func: any) => ({
         date: new Date(func.horarioInicio),
         room: func.sala,
         startTime: new Date(func.horarioInicio),
         endTime: new Date(func.horarioFin),
        })),
      };
    });

    console.log('Películas con precios y funciones:', updatedMovies);
    return updatedMovies;
  } catch (error) {
    console.error('Error al obtener películas, precios o funciones:', error);
    throw error;
  }
};
