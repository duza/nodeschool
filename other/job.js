var util = require('util')
var Job = function Job() {
  var job = this;
  job.process = function() {
    job.emit('done', { completedOn: new Date() });
  };
}

util.inherits(Job, require('events').EventEmitter)
module.exports = Job
