import { render, screen } from '@testing-library/react';
import { TituloPelicula } from './TituloPelicula';

it('should render the title correctly', () => {
  render(<TituloPelicula />);
  const titleElement = screen.queryByText('SPIDERMAN NO WAY HOME');
  expect(titleElement).not.toBeNull();
});
