import React from 'react'
import { DateTime } from 'luxon'
import classes from './Todo.module.scss'
const dt = DateTime.local()

const Todo = ({ todo }) => {
  return (
    <div className={classes.TodoCard}>
      <h2>{todo[0].toUpperCase() + todo.substring(1) + '.'}</h2>
      <p>Added: {dt.toLocaleString(DateTime.DATETIME_MED)}</p>
      <button>Complete</button>
    </div>
  )
}

export default Todo