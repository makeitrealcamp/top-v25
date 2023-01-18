const express = require('express');
const socket = require('express-ws');
const { faker } = require('@faker-js/faker')

const app = express();
socket(app);

const types = ['INFO', 'WARNING', 'ERROR'];

app.ws('/', (ws, req) => {
  ws.on('message', (msg) => {
    console.log('Message received', msg);
  })

  setInterval(() => {
    const msg = {
      message: faker.lorem.sentence(),
      type: faker.helpers.arrayElement(types),
      coords: [faker.address.latitude(), faker.address.longitude()],
      time: new Date().toISOString()
    };
    ws.send(JSON.stringify(msg));
  }, 10000);
})

app.listen(8080, () => {
  console.log('Server started on port 8080');
})
