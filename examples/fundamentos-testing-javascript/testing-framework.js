const { sum, subtract } = require('./math')

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
  const expected = 10

  // Act
  const result = subtract(7, 3)

  // Assert
  expect(result).toBe(expected)
})


function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`)
      }
    },
    toBeGreaterThan() {},
    toBeLessThan() {}
  }
}

function test(title, callback) {
  try {
    callback()
    console.log(`✅ ${title}`)
  } catch (error) {
    console.error(`❌ ${title}`)
    console.error(error)
  }
}
