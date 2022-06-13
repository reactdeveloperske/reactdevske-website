import { render, screen } from '@testing-library/react';
import MemberCard from './MemberCard';

test('renders member card component', () => {
  render(<MemberCard />);
  const linkElement = screen.getByText(/This is the Member card component/i);
  expect(linkElement).toBeInTheDocument();
});