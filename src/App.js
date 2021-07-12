import React, { useState } from 'react';
import "./App.css";

function App() {
  const mockTodos =[
    'Need to wakeup in the morning',
    'Brush your Teeths'
  ]

  const [todoList, setTodoList] = useState(mockTodos);
  const [todo, setTodo] = useState('')
  const addTodo =() =>{
    const currentTodo =[...todoList, todo]
    setTodoList(currentTodo)
    setTodo('')
  }

  const handleChange =(e) =>{
    setTodo(e.target.value);
  }
  return (
    <div className="App">
      <h1>ToDo Application</h1>
      <div>
        <div>
          <input type="text" onChange={(e) =>handleChange(e)} value={todo}/>
          <button onClick={addTodo}>Add Todo</button>
        </div>
        <div>
          <ul>
            {todoList && todoList.map(item =>{
             return  <li>{item}</li>
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
