const net = require('net');
const port = process.argv[2];

const server = net.createServer((socket) => {
  const time = new Date();
  socket.write(`${time.getFullYear()}-${time.getMonth()+'1'}-${time.getDate()}`+
    ` ${time.getHours()}:${time.getMinutes()}\n`);
  socket.end();
});

server.listen(port);

// var net = require('net')
//
//     function zeroFill (i) {
//       return (i < 10 ? '0' : '') + i
//     }
//
//     function now () {
//       var d = new Date()
//       return d.getFullYear() + '-' +
//         zeroFill(d.getMonth() + 1) + '-' +
//         zeroFill(d.getDate()) + ' ' +
//         zeroFill(d.getHours()) + ':' +
//         zeroFill(d.getMinutes())
//     }
//
//     var server = net.createServer(function (socket) {
//       socket.end(now() + '\n')
//     })
//
//     server.listen(Number(process.argv[2]))
