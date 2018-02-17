const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    req.pipe(fs.createWriteStream('post.txt'));
  }
  res.end('beep boop\n');
});

server.listen(process.argv[2] || '8000');
