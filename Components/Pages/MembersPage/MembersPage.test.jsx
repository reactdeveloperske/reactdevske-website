import { render, screen } from '@testing-library/react';
import MembersPage from './MembersPage';

test('renders The Members Page', () => {
  render(<MembersPage />);
  const linkElement = screen.getByText(/The Members Page/i);
  expect(linkElement).toBeInTheDocument();
});