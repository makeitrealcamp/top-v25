const { sum, subtract } = require('./math')

// AAA
test('sum adds numbers', async() => {
  // Arrange
  const expected = 10

  // Act
  const result = sum(3, 7)

  // Assert
  expect(result).toBe(expected)
})

test('substract substracts numbers', async() => {
  // Arrange
  const expected = 4

  // Act
  const result = subtract(7, 3)

  // Assert
  expect(result).toBe(expected)
})
