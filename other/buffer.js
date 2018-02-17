var fs = require('fs');

let buf = new Buffer(26);
for (var i = 0 ; i < 26 ; i++) {
  buf[i] = i + 97 // ascii a
}
console.log(buf);
console.log(buf.toString('ascii', 0, 16));
console.log(buf.toString('utf8'));

fs.readFile('/etc/passwd', function (err, data) {
  if (err) return console.error(err);
  console.log(data, typeof data);
})
