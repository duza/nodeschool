var through = require('through2');
var stream = through(write, end);

function write(buffer, encoding, next) {
  let arrStringsChunk = buffer.toString().split(/\r?\n/g);
  arrStringsChunk = arrStringsChunk.map((str, index) => {
    let modifiedString;
    if (even) {
      modifiedString = str.toUpperCase();
    } else {
      modifiedString = str.toLowerCase();
    }
    console.log('current even=', even);
    if (arrStringsChunk.length > 1) {
      even = !even;
      console.log('future even=', even);
    }
    console.log('modified str=', modifiedString);
    return modifiedString;
  });
  this.push(arrStringsChunk.join('\n'));
  next();
}

function end(done) {
  done();
}
var even = false;
process.stdin.pipe(stream).pipe(process.stdout);
