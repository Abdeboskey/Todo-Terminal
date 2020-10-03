import React from 'react'
import App from './App'
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('App', () => {
  it('should allow a user to create a to-do', () => {
    const { getByRole } = render(
      <>
        <App />
      </>
    )

    const input = getByRole('textbox')
    fireEvent.change(input, { target: { value: 'practice typing' } })

    const makeTodoButton = getByRole('button', { name: /make to-do/i })
    fireEvent.click(makeTodoButton)

    const typingTodo = getByRole('heading', { name: /practice typing/i })
    expect(typingTodo).toBeInTheDocument()
  })

  it('should allow a user to remove a to-do when completed', () => {
    const { getByRole } = render(
      <>
        <App />
      </>
    )
    
    const todoHeading = getByRole('heading', { name: /practice typing/i })
    expect(todoHeading).toBeInTheDocument()

    const completeButton = getByRole('button', { name: /complete/i })
    fireEvent.click(completeButton)
    
    expect(todoHeading).not.toBeInTheDocument()
  })
})

