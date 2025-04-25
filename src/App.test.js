import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';


test('adds a task to the list', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/add your task here/i);
  const buttonElement = screen.getByRole('button', { name: /add/i });
  fireEvent.change(inputElement, { target: { value: 'New Task' } });
  fireEvent.click(buttonElement);
  expect(inputElement.value).toBe('');
  expect(screen.getByText('New Task')).toBeInTheDocument();
});

test('deletes a task from the list', () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/add your task here/i);
  const addButton = screen.getByText(/add/i);

  fireEvent.change(input, { target: { value: 'Task to Delete' } });
  fireEvent.click(addButton);

  const deleteButton = screen.getByTestId('delete-icon');
  fireEvent.click(deleteButton);

  expect(screen.queryByText('Task to Delete')).not.toBeInTheDocument();
});

test('toggles task completion', () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/add your task here/i);
  const addButton = screen.getByText(/add/i);

  fireEvent.change(input, { target: { value: 'Task to Toggle' } });
  fireEvent.click(addButton);

  const checkbox = screen.getByRole('checkbox');
  fireEvent.click(checkbox);

  expect(checkbox).toBeChecked();
});
