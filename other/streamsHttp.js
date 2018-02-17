const http = require('http');
var server = http.createServer( (req, res) => {
  var body = '';
  req.setEncoding('utf8');
  req.on('data', (chunk) => {
    body += chunk
  });
  req.on('end', () => {
    var data = JSON.parse(body);
    res.write(typeof data);
    res.end();
  });
});

server.listen(1337);
