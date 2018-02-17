const express = require('express');
const app = express();

app.get('/non-stream', function(req, res) {
  var file = fs.readFile(largeImagePath, function(error, data) {
    res.end(data);
  });
})

app.get('/stream', function(req, res) {
  var stream = fs.createReadStream(largeImagePath);
  stream.pipe(res);
})
