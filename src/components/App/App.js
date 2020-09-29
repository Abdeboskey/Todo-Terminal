import React, { useState } from 'react'
import TodoList from '../TodoList/TodoList'
import TodoMaker from '../TodoMaker/TodoMaker';
import './App.scss';

const App = () => {
  const [ todos, setTodos ] = useState([])

  const addTodo = newTodo => {
    setTodos([...todos, newTodo])
  }
  
  const saveTodo = todo => {
    let todos = getFromLocalStorage('savedTodos')
    if (todos === null) {
      todos = [todo]
      localStorage.setItem('savedTodos', JSON.stringify(todos))
      setTodos([...todos, todo])
    } else {
      todos = JSON.parse(todos)
      todos.push(todo) // maybe this can just go in the stringify
      localStorage.setItem('savedTodos', JSON.stringify(todos))
      setTodos([...todos, todo])
    }
  }

  return (
    <main className="App">
      <TodoMaker addTodo={addTodo} />
      <TodoList todos={todos} />
    </main>
  );
}

export default App;