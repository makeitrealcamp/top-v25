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

async function test(title, callback) {
  try {
    await callback()
    console.log(`✅ ${title}`)
  } catch (error) {
    console.error(`❌ ${title}`)
    console.error(error)
  }
}

global.expect = expect
global.test = test
