var fs = require('fs')

const pathToFile = process.argv[2];
const stringValue = fs.readFileSync(pathToFile, 'utf8');
const count = stringValue.split('\n').length - 1;
console.log(count);
