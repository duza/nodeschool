const http = require('http');
const url = process.argv[2];

http.get(url, (response) => {
  // const { statusCode } = response;
  // const contentType = response.headers['content-type'];
  //
  // let error;
  // if (statusCode !== 200) {
  //   error = new Error(`Request Failed.\n Status Code: ${statusCode}`);
  // } else if (!/^application\/json/.test(contentType)) {
  //   error = new Error('Invalid content-type.\n' +
  //     `Expected application/json but received ${contentType}`);
  // }
  // if (error) {
  //   console.log(error.message);
  //   response.resume();
  //   return;
  // }
  response.setEncoding('utf8');
  // let rawData = '';
  response.on('data', (chunk) => {
    // rawData += chunk;
    console.log(chunk);
  });
  // response.on('end', () => {
  //   try {
  //     const parsedData = JSON.parse(rawData);
  //     console.log(parsedData);
  //   } catch (e) {
  //     console.error(e.message);
  //   }
  // }).on('error', (e) => {
  //   console.error(`Got error: $(e.message)`);
  // });
});
