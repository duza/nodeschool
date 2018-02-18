const request = require('request');
request('http://ya.ru:80/').pipe(process.stdout);
// const r = request.post('http://beep.boop:80');
// we can use `src.pipe(r)` or `r.pipe(dst)` because r readable+writable
// or src.pipe(r).pipe(dst);
