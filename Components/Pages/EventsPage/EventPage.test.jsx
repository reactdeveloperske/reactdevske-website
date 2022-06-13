import { render, screen } from '@testing-library/react';
import EventPage from './EventPage';

test('renders The Event Page', () => {
  render(<EventPage />);
  const linkElement = screen.getByText(/The Events Page/i);
  expect(linkElement).toBeInTheDocument();
});