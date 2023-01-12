import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Counter from "./Counter"

test('should handle click', () => {
  // Arrange

  // Act
  render(<Counter />)
  const buttonElement = screen.getByText(/add one/i)
  const paragraphElement = screen.getByRole('contentinfo')
  userEvent.click(buttonElement)

  // Assert
  expect(paragraphElement).toHaveTextContent('You clicked 1 times')

  // Act
  userEvent.click(buttonElement)

  // Assert
  expect(paragraphElement).toHaveTextContent('You clicked 2 times')
})
