import React from 'react'
import classes from './Todo.module.scss'

const Todo = ({ todo }) => {
  return (
    <div className={classes.TodoCard}>
      <h2>{todo.todo[0].toUpperCase() + todo.todo.substring(1) + '.'}</h2>
      <p>Added: {todo.dateTime}</p>
      <button>Complete</button>
    </div>
  )
}

export default Todo