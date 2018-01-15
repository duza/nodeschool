const http = require('http');
const url = require('url');
const port = process.argv[2];

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    const dstUrl = url.parse(req.url, true);
    const { iso } = dstUrl.query;
    const isoTime = new Date(iso);
    let data;
    if (dstUrl.pathname === '/api/parsetime') {
      data = JSON.stringify({
        hour: isoTime.getHours(),
        minute: isoTime.getMinutes(),
        second: isoTime.getSeconds(),
      });
    } else if (dstUrl.pathname === '/api/unixtime') {
      data = JSON.stringify({
        unixtime: isoTime.getTime(),
      });
    }
    if (data) {
      res.write(data);
    }
    res.end();
  }
});

server.listen(port);
//
// var http = require('http')
//     var url = require('url')
//
//     function parsetime (time) {
//       return {
//         hour: time.getHours(),
//         minute: time.getMinutes(),
//         second: time.getSeconds()
//       }
//     }
//
//     function unixtime (time) {
//       return { unixtime: time.getTime() }
//     }
//
//     var server = http.createServer(function (req, res) {
//       var parsedUrl = url.parse(req.url, true)
//       var time = new Date(parsedUrl.query.iso)
//       var result
//
//       if (/^\/api\/parsetime/.test(req.url)) {
//         result = parsetime(time)
//       } else if (/^\/api\/unixtime/.test(req.url)) {
//         result = unixtime(time)
//       }
//
//       if (result) {
//         res.writeHead(200, { 'Content-Type': 'application/json' })
//         res.end(JSON.stringify(result))
//       } else {
//         res.writeHead(404)
//         res.end()
//       }
//     })
//     server.listen(Number(process.argv[2]))
