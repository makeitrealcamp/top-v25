# NODE-Server Typescript Example 💻
bla bla bla

## Express Router and Routes


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
