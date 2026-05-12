import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the JED and DEN storefront home page', () => {
  render(<App />);

  expect(screen.getByRole('heading', { name: /pasalubong made with love/i })).toBeInTheDocument();
  expect(screen.getByText(/trusted pasalubong store since 1999/i)).toBeInTheDocument();
});
