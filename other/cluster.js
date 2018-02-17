var cluster = require('cluster');
if (cluster.isMaster) {
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
} else if (cluster.isWorker) {
  // your own server code
}
