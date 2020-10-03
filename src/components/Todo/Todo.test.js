import React from 'react'
import Todo from './Todo'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Todo', () => {

  let todo

  beforeEach(() => {
    todo = {
      id: 32487,
      todo: "write some tests",
      timeStamp: "Oct 2, 2020, 8:31 PM"
    }
  })

  it('should display the correct contents when rendered', () => {
    const mockCompleteTodo = jest.fn()
    const { getByRole, getByText } = render(
      <>
        <Todo key="0" todo={todo} completeTodo={mockCompleteTodo} />
      </>
    )

    const todoHeader = getByRole('heading', { name: /write some tests/i })
    const timeStamp = getByText(/added: oct 2, 2020, 8:31 pm/i)
    const completeButton = getByRole('button', { name: /complete/i })

    expect(todoHeader).toBeInTheDocument()
    expect(timeStamp).toBeInTheDocument()
    expect(completeButton).toBeInTheDocument()
  })
})