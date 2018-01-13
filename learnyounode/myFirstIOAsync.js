var fs = require('fs');

const pathToFile = process.argv[2];
fs.readFile(pathToFile, 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(data.split('\n').length - 1);
});
