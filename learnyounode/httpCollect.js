const http = require('http');
const bl = require('bl');
const url = process.argv[2];

// http.get(url, (response) => {
//   response.setEncoding('utf8');
//   let rawData = '';
//   response.on('data', (chunk) => {
//     rawData += chunk;
//   })
//   response.on('end', () => {
//     console.log(rawData.length);
//     console.log(rawData);
//   }).on('error', (e) => {
//     console.error(`Got error: ${e.message}`)
//   });
// });

http.get(url, (response) => {
  // response.setEncoding('utf8');
  response.pipe(bl((err, data) => {
    if (err) {
      return console.error(err);
    }
    console.log(data.length);
    console.log(data.toString());
  }));
});
