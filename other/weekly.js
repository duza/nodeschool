var Job = require('./job.js');
var job = new Job();

job.on('done', function(details){
  console.log('Job was completed at', details.completedOn);
  job.removeAllListeners();
});

job.process();
