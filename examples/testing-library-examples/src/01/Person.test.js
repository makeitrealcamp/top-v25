import { render, screen } from '@testing-library/react'
import { faker } from '@faker-js/faker'

import Person from "./Person"

test('should renders a name', () => {
  // Arrange
  const name = faker.name.fullName()

  // Act
  render(<Person name={name} />)
  const divElement = screen.getByRole('contentinfo')

  // Assert
  expect(divElement).toBeInTheDocument()
  expect(divElement).toHaveTextContent(`Name is ${name}`)
  expect(divElement).toHaveAttribute('role', 'contentinfo')
})
