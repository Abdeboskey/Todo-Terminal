import React from 'react'
import Todo from '../Todo/Todo'
import classes from './TodoList.module.scss'

const TodoList = ({ todos, completeTodo }) => {
  const allTodos = todos.map((todo, index) => {
    return <Todo key={index} todo={todo} completeTodo={completeTodo} />
  })

  return (
    <section className={classes.TodoList}>
      {allTodos.reverse()}
    </section>
  )
}

export default TodoList