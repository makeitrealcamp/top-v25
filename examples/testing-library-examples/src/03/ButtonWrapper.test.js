import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import ButtonWrapper from "./ButtonWrapper"

test('should handle click', () => {
  // Arrange
  const handleClick = jest.fn()
  const title = 'Click me'

  // Act
  render(<ButtonWrapper title={title} handleClick={handleClick} />)
  const buttonElement = screen.getByRole('button')

  // Assert
  expect(buttonElement).toBeInTheDocument()
  expect(buttonElement).toHaveTextContent(title)
  expect(handleClick).not.toHaveBeenCalled()

  // Act
  userEvent.click(buttonElement)

  // Assert
  expect(handleClick).toHaveBeenCalledTimes(1)
})
