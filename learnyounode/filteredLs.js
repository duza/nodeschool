const fs = require('fs');
const [pathToDir, fileExtension] = process.argv.slice(2);

fs.readdir(pathToDir, (err, list) => {
  if (err) console.log('!!!Error. ${err}');
  const filteredFilenames = list.filter(
    (filename) => filename.split('.')[1] === fileExtension,
  );
  filteredFilenames.forEach((filename) => { console.log(filename); });
});
