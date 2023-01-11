const supertest = require("supertest");
const { faker } = require("@faker-js/faker");

const app = require("../../app");

const request = supertest(app);

describe("Tasks Endpoint", () => {
  describe("GET /tasks", () => {
    test("should respond a 200 status code", async () => {
      // Arrange
      const statusCode = 200;
      const response = { message: "Hello World!" };

      // Act
      const res = await request.get("/api/tasks");

      // Assert
      expect(res.statusCode).toEqual(statusCode);
    });

    test("should respond wian an array of tasks", async () => {
      // Arrange
      const expected = Array;

      // Act
      const result = await request.get("/api/tasks");

      // Assert
      expect(result.body).toBeInstanceOf(expected);
      expect(result.body).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(Number),
            title: expect.any(String),
            description: expect.any(String),
            completed: expect.any(Boolean),
          }),
        ])
      );
    });
  });

  describe("POST /tasks", () => {
    test("should respond a 201 status code", async () => {
      // Arrange
      const statusCode = 201;
      const body = {
        title: "Task 4",
        description: "Description 4",
      };

      // Act
      const res = await request.post("/api/tasks").send(body);

      // Assert
      expect(res.statusCode).toEqual(statusCode);
    });

    test("should respond with a 400 when title is missing", async () => {
      // Arrange
      const statusCode = 400;
      const body = {
        description: "Description 4",
      };

      // Act
      const res = await request.post("/api/tasks").send(body);

      // Assert
      expect(res.statusCode).toEqual(statusCode);
      expect(res.body).toEqual({ message: "Title is required" });
    });

    test("should respond with a 400 when description is missing", async () => {
      // Arrange
      const statusCode = 400;
      const body = {
        title: "Title 4",
      };

      // Act
      const res = await request.post("/api/tasks").send(body);

      // Assert
      expect(res.statusCode).toEqual(statusCode);
      expect(res.body).toEqual({ message: "Description is required" });
    });

    test("should respond with the created task", async () => {
      // Arrange
      const body = {
        title: faker.lorem.word(),
        description: faker.lorem.paragraph(),
      };

      // Act
      const res = await request.post("/api/tasks").send(body);

      // Assert
      expect(res.body).toEqual(
        expect.objectContaining({
          id: expect.any(Number),
          title: body.title,
          description: body.description,
          completed: false,
        })
      );
    });

    test("should have a Content-type: application/json; charset=utf-8 header", async () => {
      // Arrange
      const body = {
        title: faker.lorem.word(),
        description: faker.lorem.paragraph(),
      };

      // Act
      const res = await request.post("/api/tasks").send(body);

      // Assert
      expect(res.header["content-type"]).toEqual(
        "application/json; charset=utf-8"
      );
      expect(res.header["content-type"]).toEqual(
        expect.stringContaining("json")
      );
    });
  });

  describe("GET /tasks/:id", () => {
    test("should respond a 200 status code", async () => {
      // Arrange
      const statusCode = 200;

      // Act
      const res = await request.get("/api/tasks/1");

      // Assert
      expect(res.statusCode).toEqual(statusCode);
    });

    test("should respond with the requested task", async () => {
      // Arrange
      const taskId = 1;
      const expected = {
        id: 1,
        title: "Task 1",
        description: "Description 1",
        completed: true,
      };

      // Act
      const res = await request.get(`/api/tasks/${taskId}`);

      // Assert
      expect(res.body).toEqual(expect.objectContaining(expected));
    });

    test("should respond with a 404 when the task does not exist", async () => {
      // Arrange
      const taskId = 100;
      const statusCode = 404;

      // Act
      const res = await request.get(`/api/tasks/${taskId}`);

      // Assert
      expect(res.statusCode).toEqual(statusCode);
      expect(res.body).toEqual({
        message: `Task not found with id: ${taskId}`,
      });
    });
  });

  describe("PATCH /tasks/:id", () => {
    test("should respond with a 200 status code", async () => {
      // Arrange
      const taskId = 1;
      const task = {
        title: "Task 1 (updated)",
      };
      // Act
      const res = await request.patch(`/api/tasks/${taskId}`).send(task);
      // Assert
      expect(res.statusCode).toEqual(200);
    });

    test("should respond with the updated task", async () => {
      // Arrange
      const taskId = 1;
      const task = {
        title: "Task 1 (updated)",
      };
      // Act
      const res = await request.patch(`/api/tasks/${taskId}`).send(task);
      // Assert
      expect(res.body).toEqual(
        expect.objectContaining({
          id: 1,
          title: "Task 1 (updated)",
          description: "Description 1",
          completed: true,
        })
      );
    });

    test("should respond with a 404 when task is not found", async () => {
      const res = await request.patch("/api/tasks/999").send({
        title: "Task 1 (updated)",
      });

      expect(res.statusCode).toEqual(404);
      expect(res.body).toEqual({
        message: "Task not found with id: 999",
      });
    });
  });

  describe("DELETE /tasks/:id", () => {
    test("should respond with a 204 status code", async () => {
      const res = await request.delete("/api/tasks/1");

      expect(res.statusCode).toEqual(204);
    });

    test("should respond with a 404 when task is not found", async () => {
      const res = await request.delete("/api/tasks/999");

      expect(res.statusCode).toEqual(404);
      expect(res.body).toEqual({
        message: "Task not found with id: 999",
      });
    });
  });
});
