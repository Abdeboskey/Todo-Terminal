import React from 'react'
import Todo from '../Todo/Todo'
import classes from './TodoList.module.scss'

const TodoList = ({ todos }) => {
  const allTodos = todos.map((todo, index) => <Todo key={index} todo={todo} />)

  return (
    <section className={classes.TodoList}>
      {allTodos.reverse() || <h2>You have not added any todos</h2>}
    </section>
  )
}

export default TodoList