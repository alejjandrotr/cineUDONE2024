import { render, screen } from '@testing-library/react'; 
import { DetallesPelicula } from './DetallesPelicula'; 
describe('DetallesPelicula', () => {
  test('debe renderizar la imagen del poster', () => {
    render(<DetallesPelicula />);

    const imagen = screen.queryByAltText('Poster de la pelicula');
    expect(imagen).toBeTruthy(); // Verificamos que la imagen existe
    expect(imagen?.getAttribute('src')).toBe('poster.png'); 
  });

  test('debe renderizar el título "Spiderman No Way Home"', () => {
    render(<DetallesPelicula />);


    const titulo = screen.queryByText('Spiderman No Way Home');
    expect(titulo).toBeTruthy(); 
  });

  test('debe renderizar la descripción de la película', () => {
    render(<DetallesPelicula />);

    
    const descripcion = screen.queryByText(
      /Tras descubrirse la identidad secreta de Peter Parker como Spider-Man/
    );
    expect(descripcion).toBeTruthy(); 
  });

  test('debe renderizar la tabla con los detalles de la función', () => {
    render(<DetallesPelicula />);

    
    const tabla = screen.queryByRole('table');
    expect(tabla).toBeTruthy(); 

    
    expect(screen.queryByText('Fecha')).toBeTruthy();
    expect(screen.queryByText('15-12')).toBeTruthy();
    expect(screen.queryByText('Hora')).toBeTruthy();
    expect(screen.queryByText('18:00')).toBeTruthy();
    expect(screen.queryByText('Sala')).toBeTruthy();
    expect(screen.queryByText('A')).toBeTruthy();
  });
});