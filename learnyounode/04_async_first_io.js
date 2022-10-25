const fs = require('fs'); // commonjs

const path = process.argv[2];

// Asynchronous
fs.readFile(path, 'utf8', function (err, contents){
  if (err) {
    return console.log(err);
  }

  const str = contents.toString();

  const lines = str.split('\n')

  console.log(lines.length - 1);
})
