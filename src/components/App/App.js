import React, { useState, useEffect } from 'react'
import TodoList from '../TodoList/TodoList'
import TodoMaker from '../TodoMaker/TodoMaker'
import './App.scss'

const App = () => {
  const [ todos, setTodos ] = useState([])

  useEffect(() => getTodos(), [todos.length])
  
  const getTodos = () => {
    let loadTodos = localStorage.getItem('savedTodos')
    if (loadTodos !== null ) {
      setTodos([...JSON.parse(loadTodos)])
    }
  }

  const saveTodo = todo => {
    let todos = localStorage.getItem('savedTodos')
    if (todos === null) {
      setTodos([todo])
      localStorage.setItem('savedTodos', JSON.stringify([todo]))
    } else {
      todos = JSON.parse(todos)
      todos.push(todo)
      localStorage.setItem('savedTodos', JSON.stringify(todos))
      setTodos([...todos])
    }
  }

  const completeTodo = id => {
    const notComplete = todos.filter(todo => todo.id !== id)
    localStorage.setItem('savedTodos', JSON.stringify(notComplete))
    setTodos([...notComplete])
  }

  return (
    <main className="App">
      <TodoMaker saveTodo={saveTodo} />
      <TodoList todos={todos} completeTodo={completeTodo} />
    </main>
  );
}

export default App;