const trumpet = require('trumpet');
const fs = require('fs');
const tr = trumpet();

fs.createReadStream('input.html').pipe(tr);
const stream = tr.select('.beep').
