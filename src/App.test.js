import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app title link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Monsters Gallery/i);
  expect(linkElement).toBeInTheDocument();
});
