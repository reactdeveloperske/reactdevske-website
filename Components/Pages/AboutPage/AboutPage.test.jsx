import { render, screen } from '@testing-library/react';
import About from './AboutPage';

test('renders The About Page', () => {
  render(<About />);
  const linkElement = screen.getByText(/The About Page/i);
  expect(linkElement).toBeInTheDocument();
});