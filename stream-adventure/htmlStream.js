const trumpet = require('trumpet');
const through = require('through2');
const tr = trumpet();
const stream = through(write, end);
function write(buffer, _, next) {
  this.push(buffer.toString().toUpperCase());
  next();
}
function end (done) {
  done();
}

const htmlLoudStream = tr.select('.loud').createStream();
htmlLoudStream.pipe(stream).pipe(htmlLoudStream);
process.stdin.pipe(tr).pipe(process.stdout);
