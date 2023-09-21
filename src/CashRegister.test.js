import { render, fireEvent, screen } from '@testing-library/react';
import CashRegister from './CashRegister';

describe('CashRegister', () => {
  it('should add money correctly', () => {
    render(<CashRegister />);
    const addInput = screen.getByLabelText('$20:');
    const addButton = screen.getByText('Add');

    fireEvent.change(addInput, { target: { value: '5' } });
    fireEvent.click(addButton);

    expect(screen.getByText('Total: $100 | 5x$20')).toBeInTheDocument();
  });

  it('should remove money correctly', () => {
    render(<CashRegister />);
    const addInput = screen.getByLabelText('$20:');
    const addButton = screen.getByText('Add');
    const removeInput = screen.getByLabelText('$20:');
    const removeButton = screen.getByText('Remove');

    fireEvent.change(addInput, { target: { value: '5' } });
    fireEvent.click(addButton);
    fireEvent.change(removeInput, { target: { value: '2' } });
    fireEvent.click(removeButton);

    expect(screen.getByText('Total: $60 | 3x$20')).toBeInTheDocument();
  });

  it('should dispense change correctly', () => {
    render(<CashRegister />);

    const addInput = screen.getByLabelText('$20:');
    const addButton = screen.getByText('Add');
    const changeInput = screen.getByLabelText('Amount:');
    const dispenseButton = screen.getByText('Dispense');

    fireEvent.change(addInput, { target: { value: '5' } });
    fireEvent.click(addButton);
    fireEvent.change(changeInput, { target: { value: '40' } });
    fireEvent.click(dispenseButton);

    expect(screen.getByText('Total: $60 | 3x$20')).toBeInTheDocument();
  });
});
