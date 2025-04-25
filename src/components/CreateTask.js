import React , {useState}from 'react';
import './CreateTask.css';

export default function Create_task({onSendData}) {
  const [input , setInput] = useState('');
  const changeHandler =(e)=>{
    e.preventDefault();
    setInput(e.target.value)
  }
  const submitHandler = ()=>{
    if (input.trim() !== '') {
      console.log('Input:', input);
      onSendData(input);
      setInput('');
    }
  }

  
  return (
    <div className='col-12'>
        <h1 className="create-task-heading">
          Create <span className="create-task-heading-subpart">Task</span>
        </h1>
        <input type="text" id="todoUserInput" className="todo-user-input" onChange={changeHandler} value={input} placeholder='Add your task here' />
        <button className="add-todo-button" onClick={submitHandler}>Add</button>
    </div>
  )
}
