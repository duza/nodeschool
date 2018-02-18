const picture = require('cat-picture');
const image = require('lightning-image-poly');
const remote = require('electron').remote;
const fs = require('fs');

function save () {
  remote.getCurrentWebContents().printToPDF({ portrait: true }, (err, data) => {
    fs.writeFile('annotation.pdf', data, (err) => {
      if (err) {
        alert(`error generating pdf! ${err.message}`);
      } else {
        alert('pdf saved!');
      }
    });
  });
}
window.addEventListener('keydown', function (e) {
  if (e.keyCode === 80) {
    save();
  }
})

const src = picture.src;
picture.remove();
const viz = new image(
  '#visualization', null, [src], { hullAlgorithm: 'convex' },
);
