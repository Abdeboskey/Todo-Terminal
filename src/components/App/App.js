import React, { useState } from 'react'
import TodoList from '../TodoList/TodoList'
import TodoMaker from '../TodoMaker/TodoMaker';
import './App.scss';

const App = () => {
  const [ todos, setTodos ] = useState([])
  
  const saveTodo = todo => {
    let todos = localStorage.getItem('savedTodos')
    if (todos === null) {
      setTodos([todo])
      localStorage.setItem('savedTodos', JSON.stringify([todo]))
    } else {
      todos = JSON.parse(todos)
      todos.push(todo) // maybe this can just go in the stringify
      localStorage.setItem('savedTodos', JSON.stringify(todos))
      setTodos([...todos])
    }
  }

  return (
    <main className="App">
      <TodoMaker saveTodo={saveTodo} />
      <TodoList todos={todos} />
    </main>
  );
}

export default App;