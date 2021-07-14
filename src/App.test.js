import { render, screen } from '@testing-library/react';
import App from './App';

test('renders contribute to Github', () => {
  render(<App />);
  const linkElement = screen.getByText(/Contribute on Github/i);
  expect(linkElement).toBeInTheDocument();
});


test('renders Join Our Telegram Community Chat', () => {
  render(<App />);
  const linkElement = screen.getByText(/Join Our Telegram Community Chat/i);
  expect(linkElement).toBeInTheDocument();
});
