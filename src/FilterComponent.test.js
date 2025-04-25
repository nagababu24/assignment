import { render, screen, fireEvent } from '@testing-library/react';
import FilterComponent from './components/FilterComponent';

test('renders filter dropdown', () => {
  render(<FilterComponent />);
  const filterDropdown = screen.getByLabelText(/filter tasks/i);
  expect(filterDropdown).toBeInTheDocument();
});


test('changes filter value', () => {
  const mockOnFilterChange = jest.fn();
  render(<FilterComponent filter="All" onFilterChange={mockOnFilterChange} />);
  const select = screen.getByRole('combobox');
  fireEvent.change(select, { target: { value: 'Completed' } });
  expect(mockOnFilterChange).toHaveBeenCalledWith('Completed');
});
