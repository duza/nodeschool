const http = require('http');
const fs = require('fs');
const [port, location] = process.argv.slice(2);

const server = http.createServer((request, response) => {
  stream = fs.createReadStream(location);
  stream.pipe(response);
});

server.listen(port);

// var http = require('http')
//    var fs = require('fs')
//
//    var server = http.createServer(function (req, res) {
//      res.writeHead(200, { 'content-type': 'text/plain' })
//
//      fs.createReadStream(process.argv[3]).pipe(res)
//    })
//
//    server.listen(Number(process.argv[2]))
