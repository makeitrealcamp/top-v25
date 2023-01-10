const { sum, subtract, mult } = require('./math')

// AAA
test('sum adds numbers', () => {
  // Arrange
  const expected = 10

  // Act
  const result = sum(3, 7)

  // Assert
  expect(result).toBe(expected)
})

test('substract substracts numbers', () => {
  // Arrange
  const expected = 4

  // Act
  const result = subtract(7, 3)

  // Assert
  expect(result).toBe(expected)
})

test('multiply 3 x 4', () => {
  // Arrange
  const expected = 12

  // Act
  const result = mult(3, 4)

  // Assert
  expect(result).toEqual(expected)
})
