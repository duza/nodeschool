const http = require('http');
const url = require('url');
const port = process.argv[2];

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    const dstUrl = url.parse(req.url, true);
    if (dstUrl.pathname === '/api/parsetime') {
      const time = dstUrl.query
    }
    // console.log(myUrl);
    // const data
    // res.write(data);
    res.end();
  }
});

server.listen(port);
