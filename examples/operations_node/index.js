const { add, subtract, multiply, divide, } = require('./operations');

const operationsData = {
  add: [
    {
      user: 'user1',
      value1: 10,
      value2: 20,
    },
    {
      user: 'user2',
      value1: 30,
      value2: 40,
    },
    {
      user: 'user3',
      value1: 50,
      value2: 60,
    }
  ],
  subtract: [
    {
      user: 'user1',
      value1: 30,
      value2: 20,
    },
    {
      user: 'user2',
      value1: 40,
      value2: 30,
    },
    {
      user: 'user3',
      value1: 50,
      value2: 40,
    }
  ],
  multiply: [
    {
      user: 'user1',
      value1: 10_500,
      value2: 20_340,
    },
    {
      user: 'user2',
      value1: 30_500,
      value2: 40_340,
    },
    {
      user: 'user3',
      value1: 50_500,
      value2: 60_340,
    },
  ],
  divide: [
    {
      user: 'user1',
      value1: '2000',
      value2: '100',
    },
    {
      user: 'user2',
      value1: '3000',
      value2: 5,
    },
    {
      user: 'user3',
      value1: '5000',
      value2: 10,
    },
  ],
}


const sumData = operationsData.add;
const sumResults = sumData.map(({ user, value1, value2 }) => {
  return {
    user,
    result: add(value1, value2),
  };
});

const subtractData = operationsData.subtract;
const subtractResults = subtractData.map(({ user, value1, value2 }) => {
  return {
    user,
    result: subtract(value1, value2),
  };
});

const multiplyData = operationsData.multiply;
const multiplyResults = multiplyData.map(({ user, value1, value2 }) => {
  return {
    user,
    result: multiply(value1, value2),
  };
});

const divideData = operationsData.divide;
const divideResults = divideData.map(({ user, value1, value2 }) => {
  return {
    user,
    result: divide(value1, value2),
  };
});

const results = {
  add: sumResults,
  subtract: subtractResults,
  multiply: multiplyResults,
  divide: divideResults,
}

console.log(results);
