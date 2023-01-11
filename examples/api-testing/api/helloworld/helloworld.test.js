const supertest = require('supertest')

const app = require('../../app')

const request = supertest(app)

describe('Hello World Endpoint', () => {
  describe('GET /helloworld', () => {
    test('should respond a 200 status code', async () => {
      // Arrange
      const statusCode = 200
      const response = { message: 'Hello World!' }

      // Act
      const res = await request.get('/api/helloworld')

      // Assert
      expect(res.statusCode).toEqual(statusCode)
      expect(res.body).toEqual(response)
    })
  })
})
