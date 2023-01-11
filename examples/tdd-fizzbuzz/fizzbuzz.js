function fizzBuzz(num) {
  const divisible = (dividend, divisor) => dividend % divisor === 0

  if (divisible(num, 3) && divisible(num, 5)) {
    return 'fizzBuzz'
  }

  if (divisible(num, 3)) {
    return 'fizz'
  }

  if (divisible(num, 5)) {
    return 'buzz'
  }

  return num
}

module.exports = fizzBuzz
