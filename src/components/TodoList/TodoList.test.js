import React from 'react'
import TodoList from './TodoList'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('TodoList', () => {
  
  let todos

  beforeEach(() => {
    todos = [
      {
        id: 1,
        todo: "write some tests",
        timeStamp: "Oct 2, 2020, 8:31 PM",
      },
      {
        id: 2,
        todo: "write more tests",
        timeStamp: "Oct 2, 2020, 8:45 PM",
      },
      {
        id: 3,
        todo: "keep on testin",
        timeStamp: "Oct 3, 2020, 10:30 AM",
      }
    ]
  })

  it('should display a list of todos', () => {
    const mockCompleteTodo = jest.fn()
    const { getByRole } = render(
      <>
        <TodoList todos={todos} completeTodo={mockCompleteTodo} />
      </>
    )

    const headingOne = getByRole('heading', { name: /write some tests/i })
    const headingTwo = getByRole('heading', { name: /write more tests/i })
    const headingThree = getByRole('heading', { name: /keep on testin/i })

    expect(headingOne).toBeInTheDocument()
    expect(headingTwo).toBeInTheDocument()
    expect(headingThree).toBeInTheDocument()
  })
})