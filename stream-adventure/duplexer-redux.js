const duplexer2 = require('duplexer2');
const through = require('through2');
const concat = require('concat-stream');
function someFunc(counter) {
  // function write (buff, _, next) {
  //   console.log(buff);
  //   this.push(buff);
  //   next();
  // }
  // function end (counter.setCounts) {
  //   done();
  // }
  const stream = counter.pipe(concat(function(body) {
    const obj = JSON.parse(body);
    console.log(obj);
    let counts = {};
    obj.forEach((el, index) => {
      const countryCode = el.country;
      if cont:

    }
      counts[contryCode] = (counts[contryCode] || 0) + 1;
  }));
  // const thr = through.obj(write, end);
  // const stream = counter.pipe(thr);
  // counter.pipe
  return duplexer2(stream, counter);
};
someFunc(process.stdin);
