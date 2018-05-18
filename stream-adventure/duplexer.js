const duplexer2 = require('duplexer2');
const spawn = require('child_process').spawn;

module.exports = function (cmd, args) {
  const childProc = spawn(cmd, args);
  return duplexer2(childProc.stdin, childProc.stdout);
};
