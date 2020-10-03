import React from 'react'
import Todo from '../Todo/Todo'
import classes from './TodoList.module.scss'

const TodoList = ({ todos }) => {
  const allTodos = todos.map((todo, index) => <Todo key={index} todo={todo} />)

  return (
    <section className={classes.TodoList}>
      {allTodos.reverse()}
    </section>
  )
}

export default TodoList