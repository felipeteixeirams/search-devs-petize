import { render, screen } from '@testing-library/react';
import Home from './routes/Home';

test('renders title "Search d_evs" in home page', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Search d_evs/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders input in home page', () => {
  render(<Home />);
  const linkElement = screen.getByRole(/textbox/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders button "Search" in home page', () => {
  render(<Home />);
  const linkElement = screen.getByRole(/button/i);
  expect(linkElement).toBeInTheDocument();
});
