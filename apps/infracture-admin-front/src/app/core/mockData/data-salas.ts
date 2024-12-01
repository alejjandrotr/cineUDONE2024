import mockCategoriaSalaData from './data-categoria-sala'; 
import mockCategoriaAsientoData from './data-categoria-asiento';

export const mockSalaData = () => {
  const categoriasSalas = mockCategoriaSalaData();
  const categoriasAsientos = mockCategoriaAsientoData();

  const salas = [
    { codigo: 'D', capacidad: 127, largo: 27, ancho: 14, categoriaId: 1 }, 
    { codigo: 'J', capacidad: 183, largo: 20, ancho: 12, categoriaId: 2 }, 
    { codigo: 'Q', capacidad: 193, largo: 10, ancho: 11, categoriaId: 1 }, 
    { codigo: 'P', capacidad: 219, largo: 27, ancho: 10, categoriaId: 2 }, 
    { codigo: 'E', capacidad: 178, largo: 14, ancho: 7, categoriaId: 1 }, 
    { codigo: 'S', capacidad: 142, largo: 23, ancho: 5, categoriaId: 2 }, 
  ];

  return salas.map((sala, index) => ({
    id: index + 1,
    ...sala,
    asientos: generateSeats(sala.capacidad, index + 1), 
    categoriaNombre: categoriasSalas.find(c => c.id === sala.categoriaId)?.nombre 
  }));
};

const generateSeats = (capacity: number, salaId: number) => {
  const seats = [];
  
  for (let i = 0; i < capacity; i++) {
    const estado = Math.random() > 0.2 ? 'activo' : 'inactivo'; 
    const categoriaId = Math.random() > 0.5 ? 1 : 2; 
    seats.push({
      id: i + 1,
      estado,
      categoriaId,
      salaId,
      categoriaNombre: mockCategoriaAsientoData().find(c => c.id === categoriaId)?.nombre
    });
  }

  return seats;
};

export default mockSalaData;