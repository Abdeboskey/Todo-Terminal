import React, { useState } from 'react'
import TodoList from '../TodoList/TodoList'
import TodoMaker from '../TodoMaker/TodoMaker';
import './App.scss';

const App = () => {
  const [ todos, setTodos ] = useState([])

  const addTodo = newTodo => {
    setTodos([...todos, newTodo])
  }

  return (
    <main className="App">
      <TodoMaker addTodo={addTodo} />
      <TodoList todos={todos} />
    </main>
  );
}

export default App;