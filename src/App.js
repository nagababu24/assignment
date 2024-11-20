import React, { useState } from 'react';
import CreateTask from './components/CreateTask';
import './App.css';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterComponent from './components/FilterComponent';

function App() {
  const [listData, setListData] = useState([]);
  const [filter, setFilter] = useState('All');

  function handleDataFromCreateTask(value) {
    setListData((prevData) => [...prevData, { text: value, completed: false }]);
  }

  function toggleTaskCompleted(index) {
    const updatedTask = [...listData];
    updatedTask[index].completed = !updatedTask[index].completed;
    setListData(updatedTask);
  }
  function deleteHandler(index) {
    const updatedTask = listData.filter((item, i) => i !== index);
    setListData(updatedTask);
  }

  function handleFilterChange(newFilter) {
    setFilter(newFilter);
  }

  // Filter tasks based on the selected filter
  const filteredTasks = listData.filter((task) => {
    if (filter === 'Completed') return task.completed;
    if (filter === 'Pending') return !task.completed;
    return true; // 'All'
  });

  return (
    <div className="todos-bg-container">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="todos-heading">Todos</h1>
            <CreateTask onSendData={handleDataFromCreateTask} />
          </div>
          <div>
            <h1 className="todo-items-heading">
              My <span className="todo-items-heading-subpart">Tasks</span>
            </h1>
            <FilterComponent filter={filter} onFilterChange={handleFilterChange} />
            <ul className="todo-items-container" id="todoItemsContainer">
              {filteredTasks.map((item, index) => (
                <li className="todo-item-container d-flex flex-row" key={index}>
                  <input
                    id="checkboxInput"
                    type="checkbox"
                    className="checkbox-input"
                    checked={item.completed}
                    onChange={() => toggleTaskCompleted(index)}
                  />
                  <div className="label-container d-flex flex-row">
                    <label htmlFor="checkboxInput" className="checkbox-label">
                      {item.text}
                    </label>
                    <div className="delete-icon-container" onClick={() => deleteHandler(index)}>
                      <DeleteIcon id='delete-icon' className="delete-icon" data-testid="delete-icon"/>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
