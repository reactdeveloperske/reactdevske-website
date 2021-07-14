import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';


test('renders contribute to Github', () => {
    render(<HomePage />);
    const linkElement = screen.getByText(/Contribute on Github/i);
    expect(linkElement).toBeInTheDocument();
  });