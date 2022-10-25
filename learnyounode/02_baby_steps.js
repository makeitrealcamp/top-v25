'use strict'

let sum = 0;

for (let i = 2; i < process.argv.length; i++) {
  sum += Number(process.argv[i]);
}

console.log(sum);


// reduce

// const args = process.argv.slice(2);

// const result = args.reduce((acc, curr) => acc + Number(curr), 0);

// console.log(result);
