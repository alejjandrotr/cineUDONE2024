import { render, screen } from '@testing-library/react'; // Importamos las herramientas de testing
import { DetallesPelicula } from './DetallesPelicula'; // Importamos el componente a probar

describe('DetallesPelicula', () => {
  test('debe renderizar la imagen del poster', () => {
    render(<DetallesPelicula />);

    // Buscamos la imagen por su atributo "alt"
    const imagen = screen.queryByAltText('Poster de la pelicula');
    expect(imagen).toBeTruthy(); // Verificamos que la imagen existe
    expect(imagen?.getAttribute('src')).toBe('poster.png'); // Verificamos el atributo "src"
  });

  test('debe renderizar el título "Spiderman No Way Home"', () => {
    render(<DetallesPelicula />);

    // Buscamos el título en el DOM
    const titulo = screen.queryByText('Spiderman No Way Home');
    expect(titulo).toBeTruthy(); // Verificamos que el título existe
  });

  test('debe renderizar la descripción de la película', () => {
    render(<DetallesPelicula />);

    // Buscamos el párrafo con la descripción
    const descripcion = screen.queryByText(
      /Tras descubrirse la identidad secreta de Peter Parker como Spider-Man/
    );
    expect(descripcion).toBeTruthy(); // Verificamos que la descripción existe
  });

  test('debe renderizar la tabla con los detalles de la función', () => {
    render(<DetallesPelicula />);

    // Verificamos que la tabla esté en el documento
    const tabla = screen.queryByRole('table');
    expect(tabla).toBeTruthy(); // Verificamos que la tabla existe

    // Verificamos los detalles de la función
    expect(screen.queryByText('Fecha')).toBeTruthy();
    expect(screen.queryByText('15-12')).toBeTruthy();
    expect(screen.queryByText('Hora')).toBeTruthy();
    expect(screen.queryByText('18:00')).toBeTruthy();
    expect(screen.queryByText('Sala')).toBeTruthy();
    expect(screen.queryByText('A')).toBeTruthy();
  });
});