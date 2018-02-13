var through = require('through2');
var stream = through(write, end);

function write(buffer, encoding, next) {
  let arrStringsChunk = buffer.toString().split(/\r?\n+/g);
  arrStringsChunk = arrStringsChunk.map((str, index) => {
    let modifiedString;
    if (even) {
      modifiedString = str.toUpperCase();
    } else {
      modifiedString = str.toLowerCase();
    }
    even = !even;
    return modifiedString;
  });
  even = !even;
  this.push(arrStringsChunk.join('\n'));
  next();
}

function end(done) {
  done();
}
var even = false;
process.stdin.pipe(stream).pipe(process.stdout);

//*** Correct version of solution from author
//
//var through = require('through2');
//var split = require('split');
//
//var lineCount = 0;
//var tr = through(function (buf, _, next) {
//  var line = buf.toString();
//  this.push(lineCount % 2 === 0
//    ? line.toLowerCase() + '\n'
//    : line.toUpperCase() + '\n'
//  );
//  lineCount ++;
//  next();
//});
//process.stdin
// .pipe(split())
// .pipe(tr)
// .pipe(process.stdout)
//;
//
//
