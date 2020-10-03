import React from 'react'
import classes from './Todo.module.scss'

const Todo = ({ todo, completeTodo }) => {
  return (
    <div className={classes.TodoCard}>
      <h2>{todo.todo[0].toUpperCase() + todo.todo.substring(1) + '.'}</h2>
      <p className={classes.timeStamp}>Added: {todo.timeStamp}</p>
      <button
        className={classes.button}
        onClick={() => completeTodo(todo.id)}
      >
        Complete
      </button>
    </div>
  )
}

export default Todo