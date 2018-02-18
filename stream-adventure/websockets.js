const ws = require('websocket-stream');
const wsStream = ws('ws://localhost:8099');

wsStream.write('hello\n');
