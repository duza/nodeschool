const fs = require('fs');
const path = require('path');

function filterFilesByExt(pathToDir, extension, callback) {
  fs.readdir(pathToDir, (err, listFiles) => {
    if (err) {
      return callback(err);
    }
    const filteredList = listFiles.filter((fileName) =>
      path.extname(fileName) === `.${extension}`,
    );
    callback(null, filteredList);
  });
};

// function myModuleFunc(pathToDir, ext, callback) {
//   if ()
// }

module.exports = filterFilesByExt;
