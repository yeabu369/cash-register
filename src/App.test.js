import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CashRegister component', () => {
  render(<App />);
  const cashRegisterElement = screen.getByText(/cash register/i); // adjust this to match a unique text in your CashRegister component
  expect(cashRegisterElement).toBeInTheDocument();
});