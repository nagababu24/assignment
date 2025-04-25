import { render, screen, fireEvent } from '@testing-library/react';
import CreateTask from './components/CreateTask';


const mockOnSendData = jest.fn();

test('renders input and button elements', () => {
  render(<CreateTask onSendData={mockOnSendData} />);
  
  const inputElement = screen.getByRole('textbox'); 
  const buttonElement = screen.getByRole('button', { name: /add/i });

  expect(inputElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});

test('updates input value when typing', () => {
  render(<CreateTask onSendData={mockOnSendData} />);
  const inputElement = screen.getByRole('textbox');

  fireEvent.change(inputElement, { target: { value: 'New Task' } });
  expect(inputElement.value).toBe('New Task');
});

test('calls onSendData and clears input on submit', () => {
  render(<CreateTask onSendData={mockOnSendData} />);
  
  const inputElement = screen.getByRole('textbox');
  const buttonElement = screen.getByRole('button', { name: /add/i });

  fireEvent.change(inputElement, { target: { value: 'New Task' } });
  fireEvent.click(buttonElement);

  expect(mockOnSendData).toHaveBeenCalledWith('New Task');
  expect(inputElement.value).toBe('');
});

test('does not call onSendData if input is empty', () => {
  render(<CreateTask onSendData={mockOnSendData} />);
  
  const buttonElement = screen.getByRole('button', { name: /add/i });
  fireEvent.click(buttonElement);

  expect(mockOnSendData).not.toHaveBeenCalled();
});
