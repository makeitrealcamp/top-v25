const fs = require('fs'); // commonjs

const path = process.argv[2];

// Synchronous
const content = fs.readFileSync(path, 'utf8');
const str = content.toString();

const lines = str.split('\n')

console.log(lines.length - 1);
