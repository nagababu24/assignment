import React from 'react';
import './FilterComponent.css';

function FilterComponent({ filter, onFilterChange }) {
  function handleFilterChange(e) {
    onFilterChange(e.target.value);
  }

  return (
    <div className="filter-dropdown">
      <label htmlFor="filter">Filter tasks:</label>
      <select id="filter" value={filter} onChange={handleFilterChange}>
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Pending">Pending</option>
      </select>
    </div>
  );
}

export default FilterComponent;
