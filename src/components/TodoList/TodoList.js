import React from 'react'
import Todo from '../Todo/Todo'

const TodoList = ({ todos }) => {
  const allTodos = todos.map((todo, index) => <Todo key={index} todo={todo} />)

  return (
    <section>
      {allTodos || <h2>You have not added any todos</h2>}
    </section>
  )
}

export default TodoList