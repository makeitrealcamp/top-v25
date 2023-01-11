const fizzBuzz = require('./fizzbuzz')

describe('fizzbuzz', () => {
  test('should print num if they receive num multiple !== 3 and 5', () => {
    // Arrange
    const expected = 13

    // Act
    const result = fizzBuzz(13)

    // Assert
    expect(result).toBe(expected)
  })

  test('should print fizz if they receive 3', () => {
    // Arrange
    const expected = 'fizz'

    // Act
    const result = fizzBuzz(3)

    // Assert
    expect(result).toBe(expected)
  })

  test('should print fizz if they receive a multiple of 3', () => {
    // Arrange
    const expected = 'fizz'

    // Act
    const result = fizzBuzz(6)

    // Assert
    expect(result).toBe(expected)
  })

  test('should print buzz if they receive 5', () => {
    // Arrange
    const expected = 'buzz'

    // Act
    const result = fizzBuzz(5)

    // Assert
    expect(result).toBe(expected)
  })

  test('should print buzz if they receive a multiple of 5', () => {
    // Arrange
    const expected = 'buzz'

    // Act
    const result = fizzBuzz(10)

    // Assert
    expect(result).toBe(expected)
  })

  test('should print fizzBuzz if they receive a multiple of 3 and 5', () => {
    // Arrange
    const expected = 'fizzBuzz'

    // Act
    const result = fizzBuzz(15)

    // Assert
    expect(result).toBe(expected)
  })
})
