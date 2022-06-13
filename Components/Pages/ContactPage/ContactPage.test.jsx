import { render, screen } from '@testing-library/react';
import ContactPage from './ContactPage';

test('renders The Contact Page', () => {
  render(<ContactPage />);
  const linkElement = screen.getByText(/The Contact Page/i);
  expect(linkElement).toBeInTheDocument();
});