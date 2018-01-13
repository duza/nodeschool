const filterFilesByExt = require('./makeItModular2.js');
const [dir, ext] = process.argv.slice(2);

function callback(err, data) {
  if (err) {
    console.log('!!!Error. ${err}');
  } else {
    data.forEach((el) => { console.log(el); } );
  }
}

filterFilesByExt(dir, ext, callback);
