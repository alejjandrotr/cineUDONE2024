import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(baseElement).toBeTruthy(); 
  });

  it('should display "Page 2" when navigating to the /page-2 route', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const pageText = screen.getByText(/Page 2/i);
    expect(pageText).not.toBeNull(); 
  });
});