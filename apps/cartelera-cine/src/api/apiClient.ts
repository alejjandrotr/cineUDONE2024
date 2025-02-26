import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001/api'; 

export const fetchMovies = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/movies`);
    console.log('Películas obtenidas:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error al obtener películas:', error);
    throw error;
  }
};