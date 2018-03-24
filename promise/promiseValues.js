'use strict';

const attachTitle = (name) => `DR. ${name}`;
let promise = Promise.resolve('MANHATTAN');
promise.then(attachTitle)
  .then(console.log);
