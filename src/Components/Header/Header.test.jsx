import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders member card component', () => {
  render(<Header />);
  const linkElement = screen.getByText(/This Is the Header Section of the page/i);
  expect(linkElement).toBeInTheDocument();
});