const http = require('http');
const listOfUrls = process.argv.slice(2);

let count = 0;
let responses = [];
const arrResults = listOfUrls.map((url, index) => {
  http.get(url, (response) => {
    response.setEncoding('utf8');
    let rawData = '';
    response.on('data', (chunk) => {
      rawData += chunk;
    });
    response.on('end', () => {
      responses[index] = rawData;
      if (responses.length === listOfUrls.length) {
        responses.forEach((resp) => { console.log(resp); });
      }
    }).on('error', (e) => {
      // count++;
      console.error(`Got error: ${e.message}`);
    });
  });
});

// var http = require('http')
// var bl = require('bl')
// var results = []
// var count = 0
//
// function printResults () {
//   for (var i = 0; i < 3; i++) {
//     console.log(results[i])
//   }
// }
//
// function httpGet (index) {
//   http.get(process.argv[2 + index], function (response) {
//     response.pipe(bl(function (err, data) {
//       if (err) {
//         return console.error(err)
//       }
//
//       results[index] = data.toString()
//       count++
//
//       if (count === 3) {
//         printResults()
//       }
//     }))
//   })
// }
//
// for (var i = 0; i < 3; i++) {
//   httpGet(i)
// }
