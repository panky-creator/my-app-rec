import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the login form', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /sign in to textutils/i })).toBeInTheDocument();
  expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument();
});
