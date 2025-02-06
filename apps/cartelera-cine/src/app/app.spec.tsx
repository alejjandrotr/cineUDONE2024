import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './app'; 

describe('App', () => {
  it('should render the Header component', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const headerTitle = screen.getByText('CINE'); 
    expect(headerTitle).toBeTruthy(); 
  });
});
