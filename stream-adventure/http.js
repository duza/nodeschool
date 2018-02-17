const through = require('through2');
const http = require('http');

//    process.stdin.pipe(through(write, end)).pipe(process.stdout);
//
//    function write (buf, _, next) {
//            this.push(buf);
//            next();
//          }
//    function end (done) { done(); }
//    }
const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    function write(buf, _, next) {
      this.push(buf.toString().toUpperCase());
      next();
    }
    function end (done) {
      done();
    }
    req.pipe(through(write, end)).pipe(res);
  } else {
    res.end('send me POST\n');
  }
  // res.end();
});

server.listen(parseInt(process.argv[2]));
