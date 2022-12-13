# NODE-Server Typescript Example 💻
Hello and welcome! This Node.JS project demonstrates a simple architecture building a full API with Node.JS, Express.JS, and MongoDB presents an architectural demo of these features:

- Built with Node.js and Express
- Typescript
- Mongoose ODM
- REST API

## Express Router and Routes

| Route               | HTTP Verb | Route Middleware   | Description                          |
| --------------------| --------- | ------------------ | ------------------------------------ |
| /api/users          | GET       |                    | Get list of users                    |
| /api/users          | POST      |                    | Creates a new users                  |
| /api/users/:id      | GET       |                    | Get a single users                   |
| /api/users/:id      | DELETE    | isAuthenticated    | Deletes a user                       |


## Usage
The use of endpoints is very simple, previously you could see a table of endpoints that you can call, if you need to create a note or log in, here we have some examples.

### Authentication user `/auth/local/login`

Request Body:
```json
{
  "email": "k@lo.com",
  "password": "123456",
}
```

Response:

```json
{
      "profile": {
        "firstName": "juan",
        "lastName": "LORZA",
        "email": "k@lo.com",
        "avatar": "",
        "role": "USER"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJqdWFuIiwibGFzdE5hbWUiOiJMT1JaQSIsImVtYWlsIjoianVhbkBtaXIuY29tIiwiYXZhdGFyIjoiIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE2NzA0MjE5MjEsImV4cCI6MTY3MDQyNTUyMX0.AK1ILqpSHz6lwSTCns-_77y06AmW8L6s5eWRwqUQER8"
}
```


### Developing

1. Run `npm install` to install server dependencies.

2. Configure the env
```shell
$ cp .env.example .env
```

3. Update `.env` with the required info

4. Run `npm run dev` to start the development server.
